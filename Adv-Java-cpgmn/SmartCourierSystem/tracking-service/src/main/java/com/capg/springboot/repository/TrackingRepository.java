package com.capg.springboot.repository;

import com.capg.springboot.entity.Tracking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrackingRepository extends JpaRepository<Tracking, Long> {

    List<Tracking> findByTrackingNumber(String trackingNumber);
}