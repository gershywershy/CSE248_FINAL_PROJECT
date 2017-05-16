package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EventPageController {
	
	@RequestMapping("/funOwlEvents.html")
	String index(){
		return "funOwlEvents"; //returns string from template file
	}

}
