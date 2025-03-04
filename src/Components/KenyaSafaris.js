import React from "react";
import "../css/styles.css"; // External CSS for styling

const KenyaSafaris = () => {
  return (
    <div className="kenyasafari-container">
      <h2>8 Days, 7 Nights Kenya Highlights Safari</h2>

      {/* Itinerary Table */}
      <div className="kenyatable-container">
        <h3>Itinerary</h3>
        <table className="kenyasafari-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Destination</th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><b>Day 1</b></td><td>Nairobi</td><td>Arrival, hotel transfer, dinner at Carnivore</td></tr>
            <tr><td><b>Day 2</b></td><td>Masai Mara</td><td>Drive from Nairobi, first game drive</td></tr>
            <tr><td><b>Day 3</b></td><td>Masai Mara</td><td>Morning & afternoon game drives, Masai village visit</td></tr>
            <tr><td><b>Day 4</b></td><td>Aberdares</td><td>Thomson’s Falls, lunch, Aberdares game drive</td></tr>
            <tr><td><b>Day 5</b></td><td>Lake Naivasha</td><td>Boat ride, Crescent Island guided walk</td></tr>
            <tr><td><b>Day 6</b></td><td>Amboseli</td><td>Drive via Nairobi, evening game drive</td></tr>
            <tr><td><b>Day 7</b></td><td>Amboseli</td><td>Morning & afternoon game drives</td></tr>
            <tr><td><b>Day 8</b></td><td>Nairobi</td><td>Return to JKIA for departure</td></tr>
          </tbody>
        </table>
      </div>

      {/* Safari Package Details */}
      <div className="kenyatable-container">
        <h3>Package Details</h3>
        <table className="kenyasafari-table">
          <thead>
            <tr>
              <th>Includes</th>
              <th>Excludes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Private transfers, accommodations, park fees, game drives, meals, bottled water, Lake Naivasha boat ride</td>
              <td>International flights, personal expenses, optional balloon safari ($500), Masai village visit ($30)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KenyaSafaris;
