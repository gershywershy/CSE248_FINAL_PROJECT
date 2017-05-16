package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/addEvent")
public class BusinessOwlAddEventsPageController {
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "BusinessOwlAddEvents"; //returns string from template file
	}

}
