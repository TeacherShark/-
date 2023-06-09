package com.example.ctrip.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.InputStream;
import java.util.UUID;

//上传
public class Upload {
    /**
     * 提取上传方法为公共方法
     *
     * @param uploadDir 上传文件目录
     * @param file      上传对象
     * @throws Exception
     */
    public String executeUpload(String uploadDir, MultipartFile file) throws Exception {

        //文件后缀名 .png
        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
        //上传文件名 上传到服务器的文件名
        String filename = UUID.randomUUID() + suffix;
        //服务器端保存的文件对象
        //File serverFile = new File(uploadDir + filename);
        //将上传的文件写入到服务器端文件内
        // file.transferTo(serverFile);
        // 上传静态服务
        InputStream inputStream = file.getInputStream();
        String filePath = null;
        Boolean flag = FtpFileUtil.uploadFile(filename,inputStream);
        if (flag == true) {
            System.out.println("ftp上传成功！");
            filePath = filename;
        }
        System.out.println(filePath);
        return filename;

    }


}
