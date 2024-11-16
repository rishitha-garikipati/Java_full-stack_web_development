package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.service.CustomerService;

@RestController
@RequestMapping("customer")

public class CustomerController 
{
	@Autowired CustomerService service;
	
	
	@PostMapping("signup")
	public String signup(@RequestBody Customer c)
	{
		return service.signup(c);
	}
	
	 @PostMapping("login")
	  public String login(@RequestBody Customer c) {
	        Customer customer = service.login(c.getUsername(), c.getPassword());
	        return customer != null ? "Login Successful" : "Invalid Credentials";
	    }
}
