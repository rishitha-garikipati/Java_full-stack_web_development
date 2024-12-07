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


	@Override
	public Iterable<Customer> getAllCustomers() {
		return repository.findAll();
	}


	 @Override
	    public Customer updateCustomer(String username, Customer c) {
	        Customer existingCustomer = repository.findById(username).orElse(null);
	        if (existingCustomer != null) {
	            existingCustomer.setEmail(c.getEmail());
	            existingCustomer.setPassword(c.getPassword());
	            existingCustomer.setMobile(c.getMobile());
	            repository.save(existingCustomer);
	            return existingCustomer;
	        }
	        return null; 
	    }


	 @Override
	    public String deletecustomer(String username) {
	        Customer existingCustomer = repository.findById(username).orElse(null);
	        if (existingCustomer != null) {
	            // Delete the customer if found
	            repository.delete(existingCustomer);
	            return "Customer deleted successfully";
	        }
	        return "Customer not found"; // If customer does not exist
	    }
	
	
	
	

}
