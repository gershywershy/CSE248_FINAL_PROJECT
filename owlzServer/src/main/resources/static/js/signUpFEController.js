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

function makeAccount(){
    if (document.getElementById("pw1").text != document.getElementById("pw2").text){ //checks if passwords match
        alert("Password does not match");
        return;
    }
    let newAccount = new AccountInfoObj();
    newAccount.username = document.getElementById("username").text;
    newAccount.password = document.getElementById("pw1").text;
    newAccount.email = document.getElementById("email").text;
    newAccount.name = document.getElementById("name").text;
    newAccount.phoneNum = document.getElementById("phoneNum").text;
    newAccount.dateOfBirth = document.getElementById("birthday").text;
    newAccount.address = document.getElementById("address").text;
    newAccount.zipCode = document.getElementById("zipCode").text;
    newAccount.gender = document.getElementById("gender").value;

    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){

        xmlHttp.open("POST", "", true);
        xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlHttp.onreadystatechange = responseHandle;
        xmlHttp.send(JSON.stringify(newAccount));

    }else{
        setTimeout('makeAccount()', 500); //wait 500 ms to retry
    }
}

function responseHandle(){
    let responseString = xmlHttp.response;

    switch(responseString){
        case 'valid':
            validAccountCreate(newAccount);
            return;
        case 'username taken':
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
        window.location.href = 'http://localhost:8080/funOwlEvents'; //should send to preferences page when implemented
    }else if(getAccountType() === "BO"){
        //go to business owl account when finished
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