package com.klef.jfsd.springboot.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService 
{

	@Autowired
	private CustomerRepository repository;
	
	
	@Override
	public String signup(Customer c) {
		repository.save(c);
		return "Customer Added Successfully";
	}


	@Override
	public Customer login(String username, String password) {
	        return repository.findById(username)
	                .filter(c -> c.getPassword().equals(password))
	                .orElse(null);
	    }
	
	

}
