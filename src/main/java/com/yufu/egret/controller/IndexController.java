package com.yufu.egret.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
public class IndexController {

    @RequestMapping("/index")
    private String index() {
        return "index";
    }
}
