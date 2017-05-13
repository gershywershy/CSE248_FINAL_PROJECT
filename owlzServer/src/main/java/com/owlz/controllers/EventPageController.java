package com.owlz.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.owlz.testModels.EventTest;

@Controller
@RequestMapping("/funOwlEvents.html")
public class EventPageController {
	
	private String gDesc = "Some really cool event description. We have a lot of cool things planned, for our club event and things.";
	private String gSD = "A Generic Short Description";
	private String gET = "Event ";
	
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "funOwlEvents"; //returns string from template file
	}
	
	@RequestMapping(value="/search/{searchText}", method=RequestMethod.GET)
	public @ResponseBody List<EventTest> byParameter(@PathVariable String searchText) {
		System.out.println(searchText);
		
		int count = 0;
		
		EventTest e1 = new EventTest();
		e1.setDescription(gDesc);
		e1.setTitle(gET + (++count));
		e1.setShortDescription(gSD);
		e1.setPhoto("https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F30626206%2F22430626928%2F1%2Foriginal.jpg?w=800&rect=0%2C483%2C800%2C400&s=aa3a28adef1f530ccf637631dda24416");
		
		EventTest e2 = new EventTest();
		e2.setDescription(gDesc);
		e2.setTitle(gET + (++count));
		e2.setShortDescription(gSD);
		e2.setPhoto("https://s-media-cache-ak0.pinimg.com/564x/6e/6e/14/6e6e14afdd394df6a56ae5da57845244.jpg");
		
		EventTest e3 = new EventTest();
		e3.setDescription(gDesc);
		e3.setTitle(gET + (++count));
		e3.setShortDescription(gSD);
		e3.setPhoto("http://www.flashdancersnyc.com/wp-content/uploads/2017/03/Cocktail-Flyer-Template.gif");
		
		List<EventTest> events = new ArrayList<EventTest>();
		events.addAll(Arrays.asList(e1, e2, e3));
		
		
	    return events;
	}

}
