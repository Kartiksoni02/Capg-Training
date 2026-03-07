package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}