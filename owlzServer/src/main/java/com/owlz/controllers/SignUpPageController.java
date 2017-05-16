package com.owlz.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.owlz.daoObjects.MainDAO;
import com.owlz.testModels.NewAccountDTO;

@Controller
@RequestMapping("/signUp")
public class SignUpPageController {
	
	MainDAO dao = MainDAO.getDAO();
	
	@RequestMapping(method = RequestMethod.GET)
	String index(){
		return "funOwlSignUp"; //returns string from template file
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody String sendPurchases(@RequestBody NewAccountDTO account){
		boolean userNameAlreadyExists =  dao.usernameExists(account.getUsername());
		if(userNameAlreadyExists){
			return "username taken";
		}
		//add other invalidators later
		boolean wentOk = dao.addAccount(account);
		if(!wentOk){
			return "add account failed";
		}
		return "valid";
	}

}
