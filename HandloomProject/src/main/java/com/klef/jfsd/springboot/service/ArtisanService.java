package com.klef.jfsd.springboot.service;


import com.klef.jfsd.springboot.model.Artisan;

public interface ArtisanService 
{
	public String signup (Artisan a);
	
	Artisan login(String username , String password);
}
