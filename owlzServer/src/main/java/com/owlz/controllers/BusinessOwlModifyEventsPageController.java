package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/modifyEvent")
public class BusinessOwlModifyEventsPageController {
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "BusinessOwlModifyEvents"; //returns string from template file
	}

}
