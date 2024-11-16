package com.klef.jfsd.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "artsian_table")
public class Artisan 
{
	@Id
	@Column(name="artsian_username" , length = 50)
	private String username;
	@Column(name="artsian_email" , length = 50)
	private String email;
	@Column(name="artsian_password" , length = 50)
	private String password;
	@Column(name="artsian_mobile" , length = 50)
	private String mobile;
	
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	
	  
	
}
