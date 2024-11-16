package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.jfsd.springboot.model.Artisan;
import com.klef.jfsd.springboot.service.ArtisanService;

@RestController
@RequestMapping("artisan")

public class ArtisanController 
{
	@Autowired
	ArtisanService service;
	
	@PostMapping("signup")
	public String signup(@RequestBody Artisan a) 
	{
	return service.signup(a);	
	}
	
	@PostMapping("login")
	public String login(@RequestBody Artisan a) {
		Artisan artisan = service.login(a.getUsername(), a.getPassword());
		return artisan != null ? "Login Successful" : "Invalid Credentials";
	}
	

}
