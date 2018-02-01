package com.jspgou.cms.action.directive;

import com.jspgou.cms.manager.CategoryMng;
import com.jspgou.common.web.freemarker.DirectiveUtils;
import com.jspgou.core.entity.Website;
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

public class ProductTypeofCategoryListDirective extends ProductAbstractDirective {
    public static final String TPL_NAME = "ProductList";

    @Autowired
    private CategoryMng categoryMng;

    public void execute(Environment env, Map params, TemplateModel[] loopVars, TemplateDirectiveBody body)
            throws TemplateException, IOException {
        Website web = getWeb(env, params, this.websiteMng);

        List list = this.categoryMng.getListBypType(web.getId(), getPtypeId(params), Integer.valueOf(getCount(params)));
        Map paramWrap = new HashMap(
                params);
        paramWrap.put("tag_list", ObjectWrapper.DEFAULT_WRAPPER.wrap(list));
        Map origMap =
                DirectiveUtils.addParamsToVariable(env, paramWrap);
        if (isInvokeTpl(params))
            includeTpl("shop", "ProductList", web, params, env);
        else {
            renderBody(env, loopVars, body);
        }
        DirectiveUtils.removeParamsFromVariable(env, paramWrap, origMap);
    }
}

