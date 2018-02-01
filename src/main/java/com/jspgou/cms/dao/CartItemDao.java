package com.jspgou.cms.dao;

import com.jspgou.cms.entity.CartItem;
import com.jspgou.common.hibernate4.Updater;

import java.util.List;

public abstract interface CartItemDao {
    public abstract CartItem findById(Long paramLong);

    public abstract List<CartItem> getlist(Long paramLong1, Long paramLong2);

    public abstract CartItem updateByUpdater(Updater<CartItem> paramUpdater);

    public abstract CartItem deleteById(Long paramLong);

    public abstract int deleteByProductId(Long paramLong);

    public abstract int deleteByProductFactionId(Long paramLong);
}

