/**
 * Created by Dan on 5/14/2017.
 */

let xmlHttp = new XMLHttpRequest();
xmlHttp.responseType = 'json';

function AccountInfoObj(){ //used to store all account info
    this.username;
    this.password;
    this.email;
    this.name;
    this.phoneNum;
    this.dateOfBirth;
    this.address;
    this.zipCode;
    this.gender;    
}


document.addEventListener('DOMContentLoaded', function() { //runs on page load
		//alert(getAccountType());
		//alert(document.getElementById("signUpText").innerHTML);
		if(getAccountType()=="BO"){
			document.getElementById("signUpText").innerHTML = "Business Owl Sign Up";
		}
	});


function getAccountFromParams(){
	let account = new AccountInfoObj();
	
	let table = document.getElementById("mainBox").getElementsByTagName("div")[0].getElementsByTagName("table")[0];
	
	account.username = table.getElementsByTagName("input")[0].value;
    account.password = table.getElementsByTagName("input")[1].value;
    account.email = table.getElementsByTagName("input")[3].value;
    account.name = table.getElementsByTagName("input")[4].value;
    account.phoneNum = table.getElementsByTagName("input")[5].value;
    account.dateOfBirth = table.getElementsByTagName("input")[6].value;
    account.address = table.getElementsByTagName("input")[7].value;
    account.zipCode = table.getElementsByTagName("input")[8].value;
    account.gender = table.getElementsByTagName("select")[0].value;
    
	
    return account;
}

function TextResponse(){
	this.text;
}

let triggerCount = 0;
let responseCount = 0;

function makeAccount(){
	
	//alert(++triggerCount);
	
	pass1 = document.getElementById("mainBox").getElementsByTagName("div")[0].getElementsByTagName("table")[0].getElementsByTagName("input")[1].value;
	pass2 = document.getElementById("mainBox").getElementsByTagName("div")[0].getElementsByTagName("table")[0].getElementsByTagName("input")[2].value;
	
    if (pass1 != pass2){ //checks if passwords match
        alert("Password does not match");
        return;
    }
    let newAccount = getAccountFromParams();

    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){ //if the object isn't busy

        xmlHttp.open("POST", "", true);
        xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlHttp.onreadystatechange = responseHandle;
        xmlHttp.send(JSON.stringify(newAccount));

    }else{
        setTimeout('makeAccount()', 500); //wait 500 ms to retry
    }
}

function responseHandle(){
	
	if(xmlHttp.response == null){ //gets around the double null to start
		return;
	}
	
    let responseString = (xmlHttp.response).text;
    
    //alert(responseString);
    //alert("Response: " + (++responseCount));

    switch(responseString){
        case 'valid':
        	alert("valid account create");
            validAccountCreate(getAccountFromParams());
            return;
        case 'username taken':
        	alert("username taken");
            usernameTaken();
            return;
        case 'add account failed':
            addAccountFailed();
            return;
        default:
            alert('Invalid Server Response');
    }
}

function validAccountCreate(account){
    setUsername(account.username); //sets username
    setPassword(account.password);
    setZipcode(account.zipCode);

    if(getAccountType() === "FO"){
        window.location.href = '/funOwlEvents'; //should send to preferences page when implemented
    }else if(getAccountType() === "BO"){
    	window.location.href = '/manageBusiness';//go to business owl account when finished
    }else{
        alert("Invalid Account Type");
    }
}

function usernameTaken(){
	alert("Username already taken."); //temporary error msg
}

function addAccountFailed(){
	alert("Account failed to be added.");
}