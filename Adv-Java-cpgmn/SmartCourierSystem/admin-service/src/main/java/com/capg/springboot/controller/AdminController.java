package com.capg.springboot.controller;

import com.capg.springboot.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService service;

    @GetMapping("/deliveries")
    public List<Object> getAllDeliveries() {
        return service.getAllDeliveries();
    }

    @PutMapping("/delivery/{id}")
    public Object updateDelivery(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return service.updateDelivery(id, body);
    }

    @GetMapping("/tracking/{trackingNumber}")
    public List<Object> getTracking(@PathVariable String trackingNumber) {
        return service.getTracking(trackingNumber);
    }
}