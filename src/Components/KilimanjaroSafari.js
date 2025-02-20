import React from "react";
import "../css/styles.css"; // External CSS for styling

const KilimanjaroSafari = () => {
  return (
    <div className="kilisafari-container">
      <h2>Kilimanjaro Classic Safari - 9 Days, 8 Nights</h2>

      {/* Itinerary Table */}
      <div className="kilitable-container">
        <h3>Itinerary</h3>
        <table className="kilisafari-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Destination</th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Day 1</td><td>Nairobi</td><td>Arrival, hotel transfer, rest & acclimatization</td></tr>
            <tr><td>Day 2</td><td>Amboseli</td><td>Game drive, check-in, afternoon safari</td></tr>
            <tr><td>Day 3</td><td>Amboseli</td><td>Full-day game drive, views of Mt. Kilimanjaro</td></tr>
            <tr><td>Day 4</td><td>Tsavo West</td><td>Drive to Tsavo West, afternoon game drive</td></tr>
            <tr><td>Day 5</td><td>Taita Hills</td><td>Game drive, Salt Lick Lodge experience</td></tr>
            <tr><td>Day 6</td><td>Diani Beach</td><td>Travel via SGR Train or Flight</td></tr>
            <tr><td>Day 7-8</td><td>Diani Beach</td><td>Relaxation at Baobab Beach Resort & Spa</td></tr>
            <tr><td>Day 9</td><td>Nairobi</td><td>Return via Ukunda Airstrip to Nairobi</td></tr>
          </tbody>
        </table>
      </div>

      {/* Safari Package Details */}
      <div className="table-container">
        <h3>Package Details</h3>
        <table className="safari-table">
          <thead>
            <tr>
              <th>Includes</th>
              <th>Excludes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Private transfers, accommodations, park fees, game drives, meals, bottled water, SGR train/flight</td>
              <td>International flights, personal expenses, optional balloon safari ($500), Masai village visit ($30)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KilimanjaroSafari;
