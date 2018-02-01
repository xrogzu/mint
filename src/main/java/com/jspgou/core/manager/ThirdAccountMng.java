package com.jspgou.core.manager;

import com.jspgou.common.page.Pagination;
import com.jspgou.core.entity.ThirdAccount;

public abstract interface ThirdAccountMng {
    public abstract Pagination getPage(String paramString1, String paramString2, int paramInt1, int paramInt2);

    public abstract ThirdAccount findById(Long paramLong);

    public abstract ThirdAccount findByKey(String paramString);

    public abstract ThirdAccount save(ThirdAccount paramThirdAccount);

    public abstract ThirdAccount update(ThirdAccount paramThirdAccount);

    public abstract ThirdAccount deleteById(Long paramLong);

    public abstract ThirdAccount[] deleteByIds(Long[] paramArrayOfLong);
}

