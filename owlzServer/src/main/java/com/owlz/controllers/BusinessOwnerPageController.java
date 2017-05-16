package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/owner")
public class BusinessOwnerPageController {
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "businessOwner"; //returns string from template file
	}

}
