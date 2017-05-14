/**
 * Created by Dan on 5/13/2017.
 */

let cache = window.localStorage;

function Account(){
	  this.accountType;
    this.username;
    this.password;
    this.zipCode;
}


function setAccountType(accountTypeString){ // EITHER "FO" OR "BO" Any other strings will throw an error
	if (accountTypeString == "FO" || accountTypeString == "BO"){
		localStorage.setItem("accountType", accountTypeString);
	}else{
		throw "Invalid account type passed, (" + accountTypeString +").\n Needs to be FO or BO for fun owl or business owl.";
	}
	
}

function setUsername(newUsername){ //accepts a string
    localStorage.setItem("accountType", newUsername);

function setUsername(newUsername){ //accepts a string
    localStorage.setItem("username", newUsername);

}

function setPassword(newPassword){ //accepts a string
    localStorage.setItem("password", newPassword);
}

function setZipcode(newZipCode){ //accepts a string
    localStorage.setItem("zipCode", newZipCode)
}


function getAccountType(){
	return localStorage.getItem("accountType");
}


function getUsername(){
    return localStorage.getItem("username");
}

function getPassword(){
    return localStorage.getItem("password");
}

function getZipCode(){
    return localStorage.getItem("zipCode");
}

function getAccountObj(){ //returns current account object built from local storage
    let accountObj = new Account(); //local scope variable, might need to change to var if unexpected behavior occurs

    accountObj.accountType = getAccountType();
    accountObj.username = getUsername();
    accountObj.password = getPassword();
    accountObj.zipCode  = getZipCode();

    return accountObj;
}

function setAccountObj(newAccountObj){ //accepts an account object and sets all variables

	  if(newAccountObj.accountType !== null && newAccountObj.accountType !== ""){ //if username variable is defined
        setAccountType(newAccountObj.accountType);
    }
    if(newAccountObj.username !== null && newAccountObj.username !== ""){ //if username variable is defined
        setUsername(newAccountObj.username);
    }
    if(newAccountObj.password !== null && newAccountObj.password !== ""){ //if password variable is defined
        setPassword(newAccountObj.password);
    }
    if(newAccountObj.zipCode !== null && newAccountObj.zipCode !== "") { //if zipCode variable is defined
        setZipcode(newAccountObj.zipCode);
    }
}