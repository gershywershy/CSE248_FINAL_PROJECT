package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/createBusiness")
public class BusinessCreatorPageController {
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "businessCreator"; //returns string from template file
	}
	
}
