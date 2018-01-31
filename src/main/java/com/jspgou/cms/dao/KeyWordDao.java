package com.jspgou.cms.dao;

import com.jspgou.cms.entity.KeyWord;
import com.jspgou.common.hibernate4.Updater;
import java.util.List;

public abstract interface KeyWordDao
{
  public abstract List<KeyWord> getAllList();

  public abstract KeyWord findById(Integer paramInteger);

  public abstract KeyWord save(KeyWord paramKeyWord);

  public abstract KeyWord updateByUpdater(Updater<KeyWord> paramUpdater);

  public abstract KeyWord deleteById(Integer paramInteger);

  public abstract List<KeyWord> getKeyWordContent(String paramString);

  public abstract List<KeyWord> findKeyWord(Integer paramInteger);
}

/* Location:           G:\jee系统\jspgou\jspgouV6-ROOT\ROOT\WEB-INF\classes\
 * Qualified Name:     com.jspgou.cms.dao.KeyWordDao
 * JD-Core Version:    0.6.0
 */