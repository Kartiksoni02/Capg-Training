Create delivery
POST http://localhost:8080/api/deliveries

Headers:

Authorization: Bearer <token>

Body:

{
  "userId": 1,
  "serviceType": "EXPRESS",
  "totalAmount": 200
}

{
  "userId": 1,
  "serviceType": "EXPRESS",
  "totalAmount": 200,
  "parcel": {
    "weight": 2.5,
    "dimensions": "10x10x10",
    "fragile": true
  },
  "addresses": [
    {
      "type": "SENDER",
      "name": "Teja",
      "phone": "1234567890",
      "address": "Hyderabad",
      "city": "Hyderabad"
    },
    {
      "type": "RECEIVER",
      "name": "Ravi",
      "phone": "9876543210",
      "address": "Bangalore",
      "city": "Bangalore"
    }
  ]
}