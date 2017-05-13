package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FunOwlEventsControllerExperimental {
	
	@RequestMapping("/funOwlEventsExp")
	String index(){
		return "funOwlEvents-Experimental"; //returns string from template file
	}
}
