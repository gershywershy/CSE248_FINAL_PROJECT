package com.owlz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class }) //removes the login dropdown to get onto the site
public class OwlzServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OwlzServerApplication.class, args); //save
	}
}
