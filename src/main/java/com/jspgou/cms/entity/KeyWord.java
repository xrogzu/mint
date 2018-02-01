package com.jspgou.cms.entity;

import com.jspgou.cms.entity.base.BaseKeyWord;

public class KeyWord extends BaseKeyWord {
    private static final long serialVersionUID = 1L;

    public KeyWord() {
    }

    public KeyWord(Integer id) {
        super(id);
    }

    public KeyWord(Integer id, String keyword, Integer times) {
        super(id,
                keyword,
                times);
    }
}

