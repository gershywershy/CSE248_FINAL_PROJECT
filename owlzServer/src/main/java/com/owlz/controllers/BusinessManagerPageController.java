package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/manageBusiness")
public class BusinessManagerPageController {
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "businessManager"; //returns string from template file
	}

}
