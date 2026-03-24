package com.capg.springboot.service;

import com.capg.springboot.entity.Tracking;
import com.capg.springboot.repository.TrackingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackingService {

    @Autowired
    private TrackingRepository repo;

    // Add tracking update
    public Tracking addTracking(Tracking tracking) {
        return repo.save(tracking);
    }

    // Get tracking history
    public List<Tracking> getTracking(String trackingNumber) {
        return repo.findByTrackingNumber(trackingNumber);
    }
}