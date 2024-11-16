package com.klef.jfsd.springboot.service;

import com.klef.jfsd.springboot.model.Customer;

public interface CustomerService 
{
	public String signup(Customer c);
	
	 Customer login(String username, String password);
}

