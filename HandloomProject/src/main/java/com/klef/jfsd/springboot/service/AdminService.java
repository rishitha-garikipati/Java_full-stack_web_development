package com.klef.jfsd.springboot.service;

import com.klef.jfsd.springboot.model.Admin;

public interface AdminService 
{

public String signup (Admin a);
	
	Admin login(String username , String password);
}
