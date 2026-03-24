POST http://localhost:8090/api/tracking

{
  "trackingNumber": "12345",
  "status": "IN_TRANSIT",
  "location": "Hyderabad",
  "message": "Package shipped"
}

GET http://localhost:8090/api/tracking/12345