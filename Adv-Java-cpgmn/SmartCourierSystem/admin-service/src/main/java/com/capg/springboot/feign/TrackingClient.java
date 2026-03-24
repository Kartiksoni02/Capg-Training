package com.capg.springboot.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "tracking-service")
public interface TrackingClient {

    @GetMapping("/api/tracking/{trackingNumber}")
    List<Object> getTracking(@PathVariable String trackingNumber);
}