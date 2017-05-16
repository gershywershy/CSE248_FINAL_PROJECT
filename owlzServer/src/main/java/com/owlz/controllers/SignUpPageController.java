package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.owlz.daoObjects.MainDAO;
import com.owlz.testModels.NewAccountDTO;
import com.owlz.testModels.StringResponse;

@Controller
@RequestMapping("/signUp")
public class SignUpPageController {
	
	MainDAO dao = MainDAO.getDAO();
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "funOwlSignUp"; //returns string from template file
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody StringResponse sendPurchases(@RequestBody NewAccountDTO account){
		
		System.out.println("Account name: " + account.getUsername());
		System.out.println("Password: " + account.getPassword());
		System.out.println("Gender: " + account.getGender());
		
		StringResponse response = new StringResponse("valid");
		
		boolean userNameAlreadyExists =  dao.usernameExists(account.getUsername());
		if(userNameAlreadyExists){
			response = new StringResponse("username taken");
		}
		//add other invalidators later
		boolean wentOk = dao.addAccount(account);
		if(!wentOk){
			return new StringResponse("add_account_failed");
		}
		
		return response;
	}

}
