package com.capg.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;//used for automatically injecting required dependencies into a class
import org.springframework.security.crypto.password.PasswordEncoder;
//BCryptPasswordEncoder is a class from spring security used for hashing passwords, verifying passwords securely
import org.springframework.stereotype.Service;

import com.capg.springboot.entity.User;
import com.capg.springboot.repository.UserRepository;
import com.capg.springboot.security.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtil jwtUtil;

    public String register(User user) {
        user.setPassword(encoder.encode(user.getPassword())); //This is where the password gets encoded into hash format
        repo.save(user); //save is method in repository that helps us to send the data into database
        return "User registered";
    }

    public String login(User user) {
        User dbUser = repo.findByUsername(user.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (encoder.matches(user.getPassword(), dbUser.getPassword())) {
            return jwtUtil.generateToken(user.getUsername()); // from here we will generate the token when the client or use is logged in.
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}