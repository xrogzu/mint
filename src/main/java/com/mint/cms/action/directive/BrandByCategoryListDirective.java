package com.mint.cms.action.directive;

import com.mint.cms.action.directive.abs.WebDirective;
import com.mint.cms.manager.CategoryMng;
import com.mint.common.web.freemarker.DirectiveUtils;
import com.mint.core.entity.Website;
import com.mint.core.manager.WebsiteMng;
import freemarker.core.Environment;
import freemarker.template.ObjectWrapper;
import freemarker.template.TemplateDirectiveBody;
import freemarker.template.TemplateException;
import freemarker.template.TemplateModel;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

public class BrandByCategoryListDirective extends WebDirective {
    public static final String TPL_NAME = "BrandList";

    @Autowired
    private CategoryMng categoryMng;
    private WebsiteMng websiteMng;

    public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body)
            throws TemplateException, IOException {
        Website web = getWeb(env, params, this.websiteMng);
        Integer categoryId = getInt("categoryId", params);
        List list = this.categoryMng.getBrandByCate(categoryId);
        Map paramWrap = new HashMap(
                params);
        paramWrap.put("tag_list", ObjectWrapper.DEFAULT_WRAPPER.wrap(list));
        Map origMap =
                DirectiveUtils.addParamsToVariable(env, paramWrap);
        if (isInvokeTpl(params))
            includeTpl("shop", "BrandList", web, params, env);
        else {
            renderBody(env, loopVars, body);
        }
        DirectiveUtils.removeParamsFromVariable(env, paramWrap, origMap);
    }

    private void renderBody(Environment env, TemplateModel[] loopVars, TemplateDirectiveBody body) throws TemplateException, IOException {
        body.render(env.getOut());
    }

    @Autowired
    public void setWebsiteMng(WebsiteMng websiteMng) {
        this.websiteMng = websiteMng;
    }
}

