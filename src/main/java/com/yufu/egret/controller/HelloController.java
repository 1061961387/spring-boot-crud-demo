package com.yufu.egret.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
@Controller
@EnableAutoConfiguration
public class HelloController {

    @RequestMapping("/hello")
    private String hello() {
        return "hello";
    }
}
