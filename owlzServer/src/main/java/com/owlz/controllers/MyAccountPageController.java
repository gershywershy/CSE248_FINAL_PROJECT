package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyAccountPageController {
	
	@RequestMapping("/funOwlMyAccount.html")
	String index(){
		return "funOwlMyAccount"; //returns string from template file
	}

}
