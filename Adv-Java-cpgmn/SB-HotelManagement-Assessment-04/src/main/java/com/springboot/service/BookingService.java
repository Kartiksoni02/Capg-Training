package com.springboot.service;

import java.util.List;

import com.springboot.entities.Booking;

public interface BookingService {

    Booking createBooking(Booking booking);

    List<Booking> getAllBookings();

    Booking getBookingById(Long id);

    Booking updateBooking(Long id, Booking booking);

    void deleteBooking(Long id);
}