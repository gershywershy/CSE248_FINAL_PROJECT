package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/businesses")
public class BusinessesPageController {
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "Businesses"; //returns string from template file
	}

}
