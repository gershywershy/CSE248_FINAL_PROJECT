package com.owlz;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/home").setViewName("homepage");
        registry.addViewController("/").setViewName("homepage");
        registry.addViewController("/hello").setViewName("hello");
        registry.addViewController("/loginPage").setViewName("loginPage");
        registry.addViewController("/register.html").setViewName("register");
        registry.addViewController("/funOwlMyAccount.html").setViewName("funOwlMyAccount");
        registry.addViewController("/funOwlEvents.html").setViewName("funOwlEvents");
        registry.addViewController("/funOwlVenues.html").setViewName("funOwlVenues");
        registry.addViewController("/createBusiness").setViewName("businessCreator");
        registry.addViewController("/businesses").setViewName("Businesses");
        registry.addViewController("/manageBusiness").setViewName("businessManager");
        registry.addViewController("/addEvent").setViewName("BusinessOwlAddEvents");
        registry.addViewController("/modifyEvent").setViewName("BusinessOwlModifyEvents");
        registry.addViewController("/owner").setViewName("businessOwner");
    }

}