package com.capg.springboot.controller;


import com.capg.springboot.entity.User;

import com.capg.springboot.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/register") // from the postman we will get the user details here and we will send it into service for registering the data
    public String register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login") // after registering the data we will try to login with the details in our database if our database details and the details 
    //we enter does not match then the token is not going to generate,for the token generation it will move to the auth-service
    public String login(@RequestBody User user) {
        return service.login(user);
    }
}