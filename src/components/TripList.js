import React, { useState, useEffect } from "react";
import "./TripList.css";

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [Url, setUrl] = useState("http://localhost:3000/trips");

  useEffect(() => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => setTrips(data));
  }, [Url]);

  return (
    <div className="trip-list">
      <h2>My Trips List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>Total Cost: {trip.price}</p>
            <p>{trip.location}</p>
          </li>
        ))}
      </ul>
      <div className="filter-trip">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?location=Africa")}
        >
          Trip to Africa
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trip
        </button>
      </div>
    </div>
  );
}
