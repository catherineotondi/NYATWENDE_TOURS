import React from "react";
import "../css/styles.css"; // External CSS for styling

const NairobiParkTrip = () => {
  return (
    <div className="Naitrip-container">
      <h2>Nairobi National Park Day Trip</h2>

      {/* Itinerary Table */}
      <div className="Naitable-container">
        <h3>Itinerary</h3>
        <table className="Naitrip-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>06:00 AM</td><td>Pick-up from Nairobi residence/hotel</td></tr>
            <tr><td>06:30 AM - 11:30 AM</td><td>Game drive in Nairobi National Park</td></tr>
            <tr><td>11:30 AM - 12:00 PM</td><td>Visit to Animal Orphanage & Safari Walk</td></tr>
            <tr><td>12:00 PM</td><td>Exit the park & drop-off at agreed location</td></tr>
          </tbody>
        </table>
      </div>

      {/* Trip Package Details */}
      <div className="Naitable-container">
        <h3>Package Details</h3>
        <table className="Naitrip-table">
          <thead>
            <tr>
              <th>Includes</th>
              <th>Excludes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Private transport, professional guide, bottled water, park entry fees</td>
              <td>Tips, gratuities, and additional expenses</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NairobiParkTrip;
