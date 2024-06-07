# Movie Reservation System

## Challenge Objective:
Build a simple RESTful API using Node.js, Express.js, and MongoDB to manage a movie reservation system.

## Requirements:

### Movie Listing Endpoint
- An API endpoint to retrieve a list of available movies.
- Each movie should have a title and a list of available time slots with their capacities.

### Check Availability Endpoint
- An API endpoint to check the availability of a specific time slot for a movie.
- The endpoint should take the movie ID and time slot ID as parameters and return the availability (remaining capacity) for that time slot.

### Reserve Time Slot Endpoint
- An API endpoint to reserve a time slot for a movie.
- The endpoint should take the movie ID, time slot ID, and the number of people to reserve for.
- Ensure that the reservation does not exceed the available capacity of the time slot.
- Update the booked count for the reserved time slot.

## Technical Stack:
- Node.js
- Express.js
- MongoDB
