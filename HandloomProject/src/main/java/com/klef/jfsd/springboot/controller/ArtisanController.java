package com.klef.jfsd.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.jfsd.springboot.model.Artisan;
import com.klef.jfsd.springboot.service.ArtisanService;

@RestController
@RequestMapping("artisan")
public class ArtisanController 
{
    @Autowired
    ArtisanService service;

    @PostMapping("signup")
    public String signup(@RequestBody Artisan a) {
        return service.signup(a);    
    }
    
    @PostMapping("login")
    public String login(@RequestBody Artisan a) {
        Artisan artisan = service.login(a.getUsername(), a.getPassword());
        return artisan != null ? "Login Successful" : "Invalid Credentials";
    }
    
    @GetMapping("view")
    public Iterable<Artisan> viewArtisans() {
        return service.getAllArtisans();
    }

    @PutMapping("update/{username}")
    public String updateArtisan(@PathVariable String username, @RequestBody Artisan a) {
        Artisan updatedArtisan = service.updateArtisan(username, a);
        return updatedArtisan != null ? "Artisan updated successfully" : "Artisan not found";
    }

    @DeleteMapping("delete/{username}")
    public String deleteArtisan(@PathVariable String username) {
        return service.deleteArtisan(username);
    }
}
