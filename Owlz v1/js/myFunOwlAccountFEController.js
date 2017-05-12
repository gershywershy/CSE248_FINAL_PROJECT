/**
 * Created by Dan on 5/11/2017.
 */
function purchase(){
    this.id;
    this.description;
    this.price;
}
function randomPrice(min, max){
    return (Math.floor((Math.random() * (max - min) + min) *100))/100;
}

var purchases = [];

var min = 1.00;
var max = 1000.00;

var p1 = new purchase();
p1.description = "bottle of wine";
p1.price = randomPrice(min, max);

purchases.push(p1);

var p2 = new purchase();
p2.description = "Beer";
p2.price = randomPrice(min, max);

purchases.push(p2);

var p3 = new purchase();
p3.description = "Table";
p3.price = randomPrice(min, max);

purchases.push(p3);

var p4 = new purchase();
p4.description = "Tickets [4]";
p4.price = randomPrice(min, max);

purchases.push(p4);

var p5 = new purchase();
p5.description = "bottle of wine";
p5.price = randomPrice(min, max);

purchases.push(p5);

var p6 = new purchase();
p6.description = "Tickets [2]";
p6.price = randomPrice(min, max);

purchases.push(p6);

populatePurchases();


function populatePurchases(){

    var purchaseWindow = document.getElementsByClassName("right-transaction-box")[0].getElementsByClassName("transaction-bottom")[0];

    for(let i=0; i<purchases.length; i++){

        var focusPurchase = purchases[i];

        var transactionBox = document.createElement('div');
        transactionBox.className = "transaction-element";

        transactionBox.onclick = function(){
            //nothing yet
            alert("Yo transaction!")
        };

        var priceBox = document.createElement('p');
        priceBox.className = "transaction-price";
        priceBox.innerHTML = focusPurchase.price;

        var descriptionBox = document.createElement('p');
        descriptionBox.className = "transaction-title";
        descriptionBox.innerHTML = focusPurchase.description;

        transactionBox.appendChild(priceBox);
        transactionBox.appendChild(descriptionBox);

        purchaseWindow.appendChild(transactionBox);

    }
}

