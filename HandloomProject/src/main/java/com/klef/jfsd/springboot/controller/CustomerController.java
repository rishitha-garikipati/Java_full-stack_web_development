package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.service.CustomerService;

@RestController
@RequestMapping("customer")
public class CustomerController 
{
    @Autowired 
    private CustomerService service;
    
    @PostMapping("signup")
    public String signup(@RequestBody Customer c) {
        return service.signup(c);
    }
    
    @PostMapping("login")
    public String login(@RequestBody Customer c) {
        Customer customer = service.login(c.getUsername(), c.getPassword());
        return customer != null ? "Login Successful" : "Invalid Credentials";
    }
    
    @GetMapping("view")
    public Iterable<Customer> viewCustomers() {
        return service.getAllCustomers();
    }
    
    @PutMapping("update/{username}")
    public String updateCustomer(@PathVariable String username, @RequestBody Customer c) {
        Customer updatedCustomer = service.updateCustomer(username, c);
        return updatedCustomer != null ? "Customer updated successfully" : "Customer not found";
    }

    @DeleteMapping("delete/{username}")
    public String deleteCustomer(@PathVariable String username) {
        return service.deletecustomer(username);
    }
}
