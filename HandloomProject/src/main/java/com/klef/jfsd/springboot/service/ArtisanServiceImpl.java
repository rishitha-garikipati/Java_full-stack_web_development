package com.klef.jfsd.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.springboot.model.Artisan;
import com.klef.jfsd.springboot.repository.ArtisanRepository;


@Service
public class ArtisanServiceImpl implements ArtisanService 
{
	@Autowired
	ArtisanRepository repository;

	@Override
	public String signup(Artisan a) {
		repository.save(a);
		return "Artsian added successfully";
	}

	@Override
	public Artisan login(String username, String password) {
		 return repository.findById(username)
	                .filter(a -> a.getPassword().equals(password))
	                .orElse(null);
	    }
	
}
