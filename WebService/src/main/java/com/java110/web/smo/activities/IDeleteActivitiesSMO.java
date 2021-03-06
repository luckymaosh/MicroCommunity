package com.java110.web.smo.activities;

import com.java110.core.context.IPageData;
import org.springframework.http.ResponseEntity;

/**
 * 添加活动接口
 *
 * add by wuxw 2019-06-30
 */
public interface IDeleteActivitiesSMO {

    /**
     * 添加活动
     * @param pd 页面数据封装
     * @return ResponseEntity 对象
     */
    ResponseEntity<String> deleteActivities(IPageData pd);
}
