package com.capg.springboot.controller;

import com.capg.springboot.entity.Tracking;
import com.capg.springboot.service.TrackingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tracking")
public class TrackingController {

    @Autowired
    private TrackingService service;

    // Add tracking update
    @PostMapping
    public Tracking addTracking(@RequestBody Tracking tracking) {
        return service.addTracking(tracking);
    }

    // Get tracking by tracking number
    @GetMapping("/{trackingNumber}")
    public List<Tracking> getTracking(@PathVariable String trackingNumber) {
        return service.getTracking(trackingNumber);
    }
}