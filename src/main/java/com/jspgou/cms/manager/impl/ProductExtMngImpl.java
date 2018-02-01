package com.jspgou.cms.manager.impl;

import com.jspgou.cms.dao.ProductExtDao;
import com.jspgou.cms.entity.Product;
import com.jspgou.cms.entity.ProductExt;
import com.jspgou.cms.manager.ProductExtMng;
import com.jspgou.common.hibernate4.Updater;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProductExtMngImpl
        implements ProductExtMng {
    private ProductExtDao dao;

    public ProductExt save(ProductExt ext, Product product) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        long code = Long.parseLong(sdf.format(new Date())) + product.getId().longValue();
        ext.setCode(Long.valueOf(code));
        ext.setProduct(product);
        ext.init();
        this.dao.save(ext);
        return ext;
    }

    public ProductExt saveOrUpdate(ProductExt ext, Product product) {
        ProductExt entity = this.dao.findById(ext.getId());
        if (entity != null) {
            Updater updater = new Updater(ext);
            this.dao.updateByUpdater(updater);
            return entity;
        }
        return save(ext, product);
    }

    @Autowired
    public void setDao(ProductExtDao dao) {
        this.dao = dao;
    }
}

