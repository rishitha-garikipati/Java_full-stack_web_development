package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import com.klef.jfsd.springboot.service.AdminService;
import com.klef.jfsd.springboot.model.Admin;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class AdminController 

{
	@Autowired
	public AdminService adminService;
	
	
	 @GetMapping("/")
	 public ModelAndView home()
	 {
	  ModelAndView mv = new ModelAndView();
	  mv.setViewName("home");
	  return mv;
	 }
	
	@GetMapping("adminlogin")
	public ModelAndView adminlogin()
	{
		ModelAndView mv = new ModelAndView();
		mv.setViewName("adminlogin");
		return mv;
	}
	
	
   @PostMapping("checkadminlogin")
   public ModelAndView checkadminlogin (HttpServletRequest request)
   {
	    ModelAndView mv = new ModelAndView();
	    
	    String uname = request.getParameter("auname");
	    String password = request.getParameter("apwd");
	    
	    Admin admin = adminService.checkadminlogin(uname , password);
	    
	    if(admin!=null) 
	    {
	      mv.setViewName("adminhome");	
	    }
	    else 
	    {
	    	mv.setViewName("adminloginfail");
	    	mv.addObject("message","Login failed");
	    }
	    return mv;
   }
}
