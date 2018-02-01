package com.jspgou.common.web.session.cache;

import java.io.Serializable;
import java.util.Map;

public abstract interface SessionCache {
    public abstract Serializable getAttribute(String paramString1, String paramString2);

    public abstract void setAttribute(String paramString1, String paramString2, Serializable paramSerializable, int paramInt);

    public abstract void clear(String paramString);

    public abstract boolean exist(String paramString);

    public abstract Map<String, Serializable> getSession(String paramString);

    public abstract void setSession(String paramString, Map<String, Serializable> paramMap, int paramInt);
}

