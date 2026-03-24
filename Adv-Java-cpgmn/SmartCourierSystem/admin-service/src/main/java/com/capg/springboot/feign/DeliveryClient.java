package com.capg.springboot.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@FeignClient(name = "delivery-service")
public interface DeliveryClient {

    @GetMapping("/api/deliveries")
    List<Object> getAllDeliveries();

    @PutMapping("/api/deliveries/{id}")
    Object updateDelivery(@PathVariable Long id, @RequestBody Map<String, String> body);
}