package com.jspgou.cms.dao.impl;

import com.jspgou.cms.dao.LogisticsDao;
import com.jspgou.cms.entity.Logistics;
import com.jspgou.cms.entity.base.BaseLogistics;
import com.jspgou.common.hibernate4.HibernateBaseDao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Order;
import org.springframework.stereotype.Repository;

@Repository
public class LogisticsDaoImpl extends HibernateBaseDao<Logistics, Long>
        implements LogisticsDao {
    public List<Logistics> getAllList() {
        Criteria crit = createCriteria(new Criterion[0]);
        crit.addOrder(Order.asc(BaseLogistics.PROP_PRIORITY));
        List list = crit.list();
        return list;
    }

    public Logistics findById(Long id) {
        Logistics entity = (Logistics) get(id);
        return entity;
    }

    public Logistics save(Logistics bean) {
        getSession().save(bean);
        return bean;
    }

    public Logistics deleteById(Long id) {
        Logistics entity = (Logistics) super.get(id);
        if (entity != null) {
            getSession().delete(entity);
        }
        return entity;
    }

    protected Class<Logistics> getEntityClass() {
        return Logistics.class;
    }
}

