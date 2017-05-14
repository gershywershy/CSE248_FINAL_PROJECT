package com.owlz.models;

import java.time.LocalDate;

public class Purchase {
	long orderNumber;
	long transactionPrice;
	LocalDate date;
	Purchasable[] item;

}
