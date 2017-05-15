package com.owlz.daoObjects;

import org.springframework.beans.factory.annotation.Autowired;

import com.owlz.testModels.NewAccountDTO;

public class MainDAO {
	
	private static MainDAO DAO;
	
	private MainDAO(){ //overrides public constructor, making sure its private
	}
	
	private static class SingletonHelper {
		private static final MainDAO DAO = new MainDAO();
	}
	
	public static MainDAO getDAO(){
		return SingletonHelper.DAO;
	}
	
	public boolean usernameExists(String username){
		//Check usernames for occurrence
		return false; //hard coded for now for testing purposes
	}
	
	public boolean addAccount(NewAccountDTO account){ //return true if went ok, false if not
		//create account object from accountDTO object
		return true; //returns true if ok (hard wired for testing)
	}

}
