package com.capg.springboot.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.springboot.entity.Delivery;
import com.capg.springboot.repository.DeliveryRepository;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryRepository repo;
    
    public List<Delivery> getAllDeliveries() {
        return repo.findAll();
    }

    public Delivery createDelivery(Delivery delivery) {

        delivery.setTrackingNumber(UUID.randomUUID().toString());
        delivery.setStatus("DRAFT");
        

        // 🔗 Set Parcel relationship
        if (delivery.getParcel() != null) {
            delivery.getParcel().setDelivery(delivery);
        }

        // 🔗 Set Address relationships
        if (delivery.getAddresses() != null) {
            delivery.getAddresses().forEach(addr -> addr.setDelivery(delivery));
        }

        return repo.save(delivery);
    }
}