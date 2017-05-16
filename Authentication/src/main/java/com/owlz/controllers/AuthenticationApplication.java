package com.owlz.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class AuthenticationApplication{

    public static void main(String[] args) throws Throwable {
        SpringApplication.run(AuthenticationApplication.class, args);
    }

}