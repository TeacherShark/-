package com.kgc.finance.dao;

import com.kgc.finance.pojo.InfoEntry;

import java.util.List;
import java.util.Map;


public interface WindMapper {
    /**
     * 风控人员分页数据，获取记录数
     * @param map
     * @return
     */
   Integer windPagingCount(Map map);

    /**
     * 风控人员分页数据，获取数据
     * @param map
     * @return
     */
   List<InfoEntry> windPagingData(Map map);



}
