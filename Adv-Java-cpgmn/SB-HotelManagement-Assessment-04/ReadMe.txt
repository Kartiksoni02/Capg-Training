# Hotel Management System : Spring Boot

## Project Overview

This project is a **Hotel Management System** developed using **Spring Boot, Spring Data JPA, and Oracle Database**.
It allows administrators to manage hotel rooms and customer bookings through REST APIs.

The application follows a **3-layer architecture**:

* Controller Layer – Handles HTTP requests
* Service Layer – Business logic
* Repository Layer – Database interaction using Spring Data JPA

---

# Technology Stack

* Java 17
* Spring Boot
* Spring Data JPA
* Oracle Database
* Maven
* REST APIs
* Tomcat (Embedded)

Now, before postman :
Create the following tables in **Oracle Database**.

conn capgdb/capgdb

## Room Table

CREATE TABLE ROOM (
ROOM_ID NUMBER PRIMARY KEY,
ROOM_NUMBER VARCHAR2(20),
ROOM_TYPE VARCHAR2(20),
PRICE NUMBER,
STATUS VARCHAR2(20)
);


## Booking Table

CREATE TABLE BOOKING (
BOOKING_ID NUMBER PRIMARY KEY,
CUSTOMER_NAME VARCHAR2(100),
CUSTOMER_PHONE VARCHAR2(20),
CHECKIN_DATE DATE,
CHECKOUT_DATE DATE,
ROOM_ID NUMBER,
CONSTRAINT FK_ROOM
FOREIGN KEY (ROOM_ID)
REFERENCES ROOM(ROOM_ID)
);


First Test → Create Room (POST)

1) Method: POST
http://localhost:9092/rooms

Body → select raw → JSON

Example:
{
"roomId":1,
"roomNumber":"101",
"roomType":"Single",
"price":2000,
"status":"Available"
}

Click Send
If successful you will see the inserted room.

2️) Get All Rooms (GET)

Method: GET
http://localhost:9092/rooms

This will return:
[
 {
  "roomId":1,
  "roomNumber":"101",
  "roomType":"Single",
  "price":2000,
  "status":"Available"
 }
]


3️) Get Room By ID

Method: GET
http://localhost:9092/rooms/1

Result:
{
 "roomId":1,
 "roomNumber":"101",
 "roomType":"Single",
 "price":2000,
 "status":"Available"
}

4) Update Room

Method: PUT
http://localhost:9092/rooms/1

Body:
{
"roomNumber":"101",
"roomType":"Deluxe",
"price":3000,
"status":"Available"
}

5️) Delete Room

Method: DELETE
http://localhost:9092/rooms/1

6️) Booking APIs
Create Booking

POST
http://localhost:9092/bookings

Body:
{
"bookingId":1,
"customerName":"Rahul",
"customerPhone":"9999999999",
"checkInDate":"2026-03-10",
"checkOutDate":"2026-03-12",
"room":{
"roomId":1
}
}

Get All Bookings :
GET
http://localhost:9092/bookings

Get Booking by ID :
GET
http://localhost:9092/bookings/1

Update Booking :
PUT
http://localhost:9092/bookings/1

Cancel Booking :
DELETE
http://localhost:9092/bookings/1

🔥 Correct Testing Order :

1️. POST /rooms
2️. GET /rooms
3️. GET /rooms/{id}
4️. POST /bookings
5️. GET /bookings

___________________________________
can check this in oracle :
select * from room;
select * from booking;