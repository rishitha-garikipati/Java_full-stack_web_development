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
        return "Artisan added successfully";
    }

    @Override
    public Artisan login(String username, String password) {
        return repository.findById(username)
                .filter(a -> a.getPassword().equals(password))
                .orElse(null);
    }

    @Override
    public Iterable<Artisan> getAllArtisans() {
        return repository.findAll();
    }

    @Override
    public Artisan updateArtisan(String username, Artisan a) {
        Artisan existingArtisan = repository.findById(username).orElse(null);
        if (existingArtisan != null) {
            // Update the fields that are allowed to be changed
            existingArtisan.setPassword(a.getPassword());
            existingArtisan.setEmail(a.getEmail());
            existingArtisan.setMobile(a.getMobile());
            // Add any other fields to update
            repository.save(existingArtisan);
            return existingArtisan;
        }
        return null; // Artisan not found
    }

    @Override
    public String deleteArtisan(String username) {
        Artisan existingArtisan = repository.findById(username).orElse(null);
        if (existingArtisan != null) {
            repository.delete(existingArtisan);
            return "Artisan deleted successfully";
        }
        return "Artisan not found";
    }
}
