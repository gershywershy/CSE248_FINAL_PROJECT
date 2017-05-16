package com.owlz.models;

import java.time.LocalDate;

public class Event implements Purchasable {
	
	String eventName;
	String eventLocation;
	long ticketPrice;
	String description;
	LocalDate time;
	LocalDate date;
	Table[] tables;
	Business venue;
	
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getEventLocation() {
		return eventLocation;
	}
	public void setEventLocation(String eventLocation) {
		this.eventLocation = eventLocation;
	}
	public long getTicketPrice() {
		return ticketPrice;
	}
	public void setTicketPrice(long ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDate getTime() {
		return time;
	}
	public void setTime(LocalDate time) {
		this.time = time;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public Table[] getTables() {
		return tables;
	}
	public void setTables(Table[] tables) {
		this.tables = tables;
	}
	public Business getVenue() {
		return venue;
	}
	public void setVenue(Business venue) {
		this.venue = venue;
	}
	
	

}
