package com.owlz.models;


public class Employees {
	
	private Person[] employeeArray;
	private int bodyCount;

	public Employees(int bagSize) {
		employeeArray = new Person[bagSize];
		bodyCount = 0;
	}

	public void add(Person person) {
		employeeArray[bodyCount++] = person;
	}

	public void display() {
		for (int i = 0; i < bodyCount; i++) {
			System.out.println(employeeArray[i]);
		}
		System.out.println();
	}

	public Person findByUsername(String id) {
		int i = -1;
		for (i = 0; i < bodyCount; i++) {
			if (employeeArray[i].getUserName().equals(id)) {
				break;
			}
		}

		if (i == bodyCount) {
			return null;
		} else {
			return employeeArray[i];
		}
	}

	public Person removeByUsername(String id) {
		int i = -1;
		for (i = 0; i < bodyCount; i++) {
			if (employeeArray[i].getUserName().equals(id)) {
				break;
			}
		}

		if (i == bodyCount) {
			return null;
		} else {
			Person temp = employeeArray[i];
			for (int j = i; j < bodyCount; j++) {
				employeeArray[j] = employeeArray[j + 1];
			}
			bodyCount--;
			return temp;
		}
	}

}
