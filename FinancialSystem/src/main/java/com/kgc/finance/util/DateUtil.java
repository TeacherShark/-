package com.kgc.finance.util;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


/**
 * @description:
 * @author: 卢智伟
 * @date: 2019-10 19:29
 */
@Component
public class DateUtil {

    public static Date toDate(String dateStr) {
        Date date = null;
        SimpleDateFormat format = new SimpleDateFormat();
        format.applyPattern("yyyy-MM-dd");
        try {
            date = format.parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
}
