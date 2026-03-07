package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.entities.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {

}