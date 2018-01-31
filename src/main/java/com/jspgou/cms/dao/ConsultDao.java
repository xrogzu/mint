package com.jspgou.cms.dao;

import com.jspgou.cms.entity.Consult;
import com.jspgou.common.page.Pagination;
import java.util.Date;
import java.util.List;

public abstract interface ConsultDao
{
  public abstract Consult findById(Long paramLong);

  public abstract Consult saveOrUpdate(Consult paramConsult);

  public abstract Consult update(Consult paramConsult);

  public abstract Consult deleteById(Long paramLong);

  public abstract List<Consult> findByProductId(Long paramLong);

  public abstract Pagination getPage(Long paramLong, String paramString1, String paramString2, Date paramDate1, Date paramDate2, int paramInt1, int paramInt2, boolean paramBoolean);

  public abstract Pagination getVisiblePage(String paramString1, String paramString2, Date paramDate1, Date paramDate2, int paramInt1, int paramInt2);

  public abstract Consult getSameConsult(Long paramLong);

  public abstract Pagination getPageByMember(Long paramLong, int paramInt1, int paramInt2, boolean paramBoolean);

  public abstract void deleteByMemberId(Long paramLong);

  public abstract Long getProductConsult();
}

/* Location:           G:\jee系统\jspgou\jspgouV6-ROOT\ROOT\WEB-INF\classes\
 * Qualified Name:     com.jspgou.cms.dao.ConsultDao
 * JD-Core Version:    0.6.0
 */