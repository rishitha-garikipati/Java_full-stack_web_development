package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.klef.jfsd.springboot.model.Admin;
import com.klef.jfsd.springboot.model.Customer;
import com.klef.jfsd.springboot.service.CustomerService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	
	
	@GetMapping("/")
	public ModelAndView home() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("home");
		return mv;
		
	}
	
	@GetMapping("customerreg")
	public ModelAndView customerreg() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("customerreg");
		return mv;
		
	}
	@GetMapping("customerlogin")
	public ModelAndView customerlogin() {
		ModelAndView mv=new ModelAndView();
		mv.setViewName("customerlogin");
		return mv;
		
	}
	@PostMapping("insertcustomer")
	public ModelAndView insertcustomer(HttpServletRequest request) {
	    // Retrieve form data
	    String name = request.getParameter("cname");
	    String gender = request.getParameter("cgender"); 
	    String dob = request.getParameter("cdob");
	    String email = request.getParameter("cemail");
	    String location = request.getParameter("clocation"); 
	    String contact = request.getParameter("ccontact");
	    String password = request.getParameter("cpwd"); // Retrieve password

	    // Create Customer object and set properties
	    Customer customer = new Customer();
	    customer.setName(name);
	    customer.setGender(gender); 
	    customer.setDateofbirth(dob);
	    customer.setEmail(email);
	    customer.setLocation(location);
	    customer.setContact(contact);
	    customer.setPassword(password); // Set password here

	    // Save Customer and return result view
	    String message = customerService.customerRegistration(customer);
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("regsuccess");
	    mv.addObject("message", message);
	    
	    return mv;
	}
	@PostMapping("checkcustomerlogin")
	public ModelAndView checkcustomerlogin(HttpServletRequest request) {
		
		ModelAndView mv=new ModelAndView();
		
		String cemail=request.getParameter("cemail");
		String cpwd=request.getParameter("cpwd");
		
		Customer customer=customerService.checkcustomerlogin(cemail,cpwd);
		
		if(customer!=null) {
			mv.setViewName("customerhome");
			HttpSession session=request.getSession();
			session.setAttribute("customer", customer);
		}
		else {
			mv.setViewName("customerlogin");
			mv.addObject("message","Login Failed");
	
		}
		return mv;

	}
	@GetMapping("customerhome")
	  public ModelAndView customerhome() 
	  {
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("customerhome");
	    return mv;
	  }
	@GetMapping("customerprofile")
	  public ModelAndView customerprofile() 
	  {
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("customerprofile");
	    return mv;
	  }
	@GetMapping("customerlogout")
	  public ModelAndView customerlogout(HttpServletRequest request) 
	  {
		HttpSession session = request.getSession();
		session.removeAttribute("customer");
		
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("customerlogin");
	    return mv;
	  }
	@GetMapping("customersessionfail")
	  public ModelAndView customersessionfail() 
	  {
	    ModelAndView mv = new ModelAndView();
	    mv.setViewName("customersessionfail");
	    return mv;
	  }
	


}
