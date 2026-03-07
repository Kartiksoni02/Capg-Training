package com.springboot.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.entities.Booking;
import com.springboot.repository.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public Booking updateBooking(Long id, Booking booking) {

        Booking b = bookingRepository.findById(id).orElse(null);

        if(b!=null) {
            b.setCustomerName(booking.getCustomerName());
            b.setCustomerPhone(booking.getCustomerPhone());
            b.setCheckInDate(booking.getCheckInDate());
            b.setCheckOutDate(booking.getCheckOutDate());
            return bookingRepository.save(b);
        }

        return null;
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}