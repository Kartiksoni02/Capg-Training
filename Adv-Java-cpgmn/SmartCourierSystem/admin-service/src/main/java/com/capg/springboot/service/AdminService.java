package com.capg.springboot.service;

import com.capg.springboot.feign.DeliveryClient;
import com.capg.springboot.feign.TrackingClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private DeliveryClient deliveryClient;

    @Autowired
    private TrackingClient trackingClient;

    public List<Object> getAllDeliveries() {
        return deliveryClient.getAllDeliveries();
    }

    public Object updateDelivery(Long id, Map<String, String> body) {
        return deliveryClient.updateDelivery(id, body);
    }

    public List<Object> getTracking(String trackingNumber) {
        return trackingClient.getTracking(trackingNumber);
    }
}