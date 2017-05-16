/**
 * Created by Dan on 5/13/2017.
 */

let xmlHttp = new XMLHttpRequest();
xmlHttp.responseType = 'json';

let purchases = [];

function purchase(){
    this.id;
    this.description;
    this.price;
}

setUsername("test_user");
setPassword("test_password");
setAccountType("FO");

pageInitialization();

function pageInitialization(){
	//alert("Ran Initialization.");
    let purchaseWindow = document.getElementsByClassName("right-transaction-box")[0].getElementsByClassName("transaction-bottom")[0];

    if(purchaseWindow.innerHTML.length == 0){ //if there is nothing in the window using regular expressions
    	getTransactionHistory();
    }else{
        alert("events not empty"); //used for testing
    }
}

function getTransactionHistory(){
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
    	
        xmlHttp.open("POST", "", true);
        xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlHttp.onreadystatechange = updateTransactionWithResponse;
        xmlHttp.send(JSON.stringify(getAccountObj()));
        
    }else{
        setTimeout('getTransactionHistory()', 500); //wait 500 ms to retry
    }
}

function updateTransactionWithResponse(){
    if(xmlHttp.readyState == 4){ //communication is done
        //alert(xmlHttp.response);
        alert("status: " + xmlHttp.status);
        if(xmlHttp.status == 200){ //communication is ok (not 0)
        	purchases = xmlHttp.response;
            removePurchases();
            populatePurchases();
        }else{
            alert("Couldn't find purchases!");
        }
    }
}

function removePurchases(){
    let purchaseWindow = document.getElementsByClassName("right-transaction-box")[0].getElementsByClassName("transaction-bottom")[0];
    purchaseWindow.innerHTML = ""; //remove everything!
}

function populatePurchases(){

    let purchaseWindow = document.getElementsByClassName("right-transaction-box")[0].getElementsByClassName("transaction-bottom")[0];

    for(let i=0; i<purchases.length; i++){

        let focusPurchase = purchases[i];

        let transactionBox = document.createElement('div');
        transactionBox.className = "transaction-element";

        transactionBox.onclick = function(){
            //nothing yet
            alert("Yo transaction!");
        };

        let priceBox = document.createElement('p');
        priceBox.className = "transaction-price";
        priceBox.innerHTML = focusPurchase.price;

        let descriptionBox = document.createElement('p');
        descriptionBox.className = "transaction-title";
        descriptionBox.innerHTML = focusPurchase.description;

        transactionBox.appendChild(priceBox);
        transactionBox.appendChild(descriptionBox);

        purchaseWindow.appendChild(transactionBox);

    }
}