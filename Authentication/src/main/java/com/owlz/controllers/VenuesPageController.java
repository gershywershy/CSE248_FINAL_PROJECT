package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class VenuesPageController {
	
	@RequestMapping("/funOwlVenues.html")
	String index(){
		return "funOwlVenues"; //returns string from template file
	}

}
