package com.owlz.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import com.owlz.testModels.AccountTest;
import com.owlz.testModels.PurchaseTest;

@Controller
@RequestMapping("/funOwlMyAccount")
public class MyAccountPageController {
	
	String[] descriptions = {"Wine", "Beer", "Table", "Tickets", "Parking", "Chofer", "Valet Parking", "VIP Tickets"};
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "funOwlMyAccount"; //returns string from template file
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<PurchaseTest> sendPurchases(@RequestBody AccountTest account){
		//AccountTest account = accounts.get(0); //returns account in a list for some reason, need to get it out
		System.out.println("Username: " + account.getUsername());
		System.out.println("Password: " + account.getPassword());
		System.out.println("AccountType: " + account.getAccountType());
		
		List<PurchaseTest> purchases = new ArrayList<PurchaseTest>();
		
		for(int i = 0; i < 15; i++){
			int randIndex = (int)(Math.random() * descriptions.length);
			double hi = 500d;
			double lo = 2d;
			double randPrice = ((int)((Math.random()*(hi-lo)+lo)*100))/100d; //random double with 2 decimal points
			PurchaseTest p = new PurchaseTest();
			p.setId(Integer.toString(i));
			p.setDescription(descriptions[randIndex]);
			p.setPrice(Double.toString(randPrice));
			
			System.out.println("Add purchase: " + i);
			purchases.add(p);
		}
		return purchases;
	}

}
