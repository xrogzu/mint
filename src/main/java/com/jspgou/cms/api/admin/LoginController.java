package com.jspgou.cms.api.admin;

import com.jspgou.cms.api.ApiResponse;
import com.jspgou.cms.api.ApiValidate;
import com.jspgou.cms.entity.ApiAccount;
import com.jspgou.cms.entity.ShopAdmin;
import com.jspgou.cms.manager.ApiRecordMng;
import com.jspgou.cms.manager.ApiUserLoginMng;
import com.jspgou.cms.manager.ShopAdminMng;
import com.jspgou.cms.web.CmsThreadVariable;
import com.jspgou.common.security.encoder.PwdEncoder;
import com.jspgou.common.util.AES128Util;
import com.jspgou.common.web.LoginUtils;
import com.jspgou.common.web.RequestUtils;
import com.jspgou.common.web.ResponseUtils;
import com.jspgou.common.web.session.SessionProvider;
import com.jspgou.core.entity.Admin;
import com.jspgou.core.entity.User;
import com.jspgou.core.web.WebErrors;

import java.util.Set;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {

    @Autowired
    private ApiRecordMng apiRecordMng;

    @Autowired
    private ShopAdminMng shopAdminMng;

    @Autowired
    private PwdEncoder pwdEncodee;

    @Autowired
    private SessionProvider session;

    @Autowired
    private ApiUserLoginMng apiUserLoginMng;

    @RequestMapping(value = {"/user/login"}, method = {org.springframework.web.bind.annotation.RequestMethod.POST})
    public void login(String userName, String passWord, String appId, String nonce_str, String sign, HttpServletRequest request, HttpServletResponse response) {
        String body = "\"\"";
        String message = "\"\"";
        int code = 0;
        try {
            WebErrors errors = WebErrors.create(request);

            errors = ApiValidate.validateRequiredParams(errors, new Object[]{appId,
                    nonce_str, sign, userName, passWord});
            if (errors.hasErrors()) {
                code = 202;
                message = "\"param error\"";
            } else {
                ApiAccount apiAccount = CmsThreadVariable.getApiAccount();

                errors = ApiValidate.validateSign(request, errors, apiAccount, sign);
                if (errors.hasErrors()) {
                    code = 204;
                    message = "\"sign validate error\"";
                } else {
                    ShopAdmin user = this.shopAdminMng.getByUsername(userName);
                    if (user != null) {
                        String encryptPass = AES128Util.decrypt(passWord, apiAccount.getAesKey(), apiAccount.getIvKey());

                        if (this.pwdEncodee.isPasswordValid(user.getAdmin().getUser().getPassword(), encryptPass)) {
                            String sessionKey = this.session.getSessionId(request, response);

                            this.apiUserLoginMng.userLogin(userName, sessionKey);

                            LoginUtils.loginShiro(request, response, userName);

                            this.apiRecordMng.callApiRecord(RequestUtils.getIpAddr(request),
                                    appId, "/user/login", sign);
                            code = 200;
                            message = "\"success\"";
                            JSONObject json = new JSONObject();
                            json.put("sessionKey", AES128Util.encrypt(sessionKey, apiAccount.getAesKey(), apiAccount.getIvKey()));
                            if (user.isSuper())
                                json.put("permission", "*");
                            else {
                                json.put("permission", StringUtils.join(user.getPerms().toArray(), ","));
                            }
                            body = json.toString();
                        } else {
                            code = 306;
                            message = "\"username or password error\"";
                        }
                    } else {
                        code = 306;
                        message = "\"username or password error\"";
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            code = 100;
            message = "\"system exception\"";
        }
        ApiResponse apiResponse = new ApiResponse(body, message, code);
        ResponseUtils.renderApiJson(response, request, apiResponse);
    }

    @RequestMapping({"/user/loginOut"})
    public void loginOut(String sessionKey, String appId, String nonce_str, String sign, HttpServletRequest request, HttpServletResponse response) {
        String body = "\"\"";
        String message = "\"\"";
        int code = 0;
        try {
            WebErrors errors = WebErrors.create(request);

            errors = ApiValidate.validateRequiredParams(errors, new Object[]{appId,
                    nonce_str, sign, sessionKey});
            if (errors.hasErrors()) {
                code = 202;
                message = "\"param error\"";
            } else {
                ApiAccount apiAccount = CmsThreadVariable.getApiAccount();

                errors = ApiValidate.validateSign(request, errors, apiAccount, sign);
                if (errors.hasErrors()) {
                    code = 204;
                    message = "\"sign validate error\"";
                } else {
                    ShopAdmin user = this.apiUserLoginMng.findUser(sessionKey, apiAccount.getAesKey(), apiAccount.getIvKey());
                    if (user != null) {
                        this.apiUserLoginMng.userLogout(user.getUsername());
                        LoginUtils.logout();
                    }
                    code = 200;
                    message = "\"success\"";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            code = 100;
            message = "\"system exception\"";
        }
        ApiResponse apiResponse = new ApiResponse(body, message, code);
        ResponseUtils.renderApiJson(response, request, apiResponse);
    }

    @RequestMapping({"/user/getLoginUser"})
    public void getLoginUser(String sessionKey, HttpServletRequest request, HttpServletResponse response) {
        String body = "\"\"";
        int code = 200;
        String message = "\"success\"";
        try {
            WebErrors errors = WebErrors.create(request);

            errors = ApiValidate.validateRequiredParams(errors, new Object[]{sessionKey});
            if (errors.hasErrors()) {
                code = 202;
                message = "\"param error\"";
            } else {
                ApiAccount apiAccount = CmsThreadVariable.getApiAccount();
                ShopAdmin user = this.apiUserLoginMng.findUser(sessionKey, apiAccount.getAesKey(), apiAccount.getIvKey());
                if (user != null) {
                    JSONObject json = new JSONObject();
                    if (user.isSuper())
                        json.put("permission", "*");
                    else {
                        json.put("permission", StringUtils.join(user.getPerms().toArray(), ","));
                    }
                    body = json.toString();
                } else {
                    code = 302;
                    message = "\"user not login\"";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            code = 100;
            message = "\"system exception\"";
        }
        ApiResponse apiResponse = new ApiResponse(body, message, code);
        ResponseUtils.renderApiJson(response, request, apiResponse);
    }
}

