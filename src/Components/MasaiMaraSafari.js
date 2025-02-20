import React from "react";
import "../css/styles.css"; // External CSS for styling

const MasaiMaraSafari = () => {
  return (
    <div className="masaisafari-container">
      <h2>Wildebeest Migration Safari - 3 Days, 2 Nights (Masai Mara)</h2>

      {/* Itinerary Table */}
      <div className="masaitable-container">
        <h3>Itinerary</h3>
        <table className="masaisafari-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Destination</th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Day 1</td><td>Nairobi → Masai Mara</td><td>Drive via Rift Valley, lunch, afternoon game drive</td></tr>
            <tr><td>Day 2</td><td>Masai Mara</td><td>Morning & afternoon game drives, optional Masai Village visit ($25)</td></tr>
            <tr><td>Day 3</td><td>Masai Mara → Nairobi</td><td>Early breakfast, final game drive, return to Nairobi</td></tr>
          </tbody>
        </table>
      </div>

      {/* Safari Package Details */}
      <div className="masaitable-container">
        <h3>Package Details</h3>
        <table className="masaisafari-table">
          <thead>
            <tr>
              <th>Includes</th>
              <th>Excludes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Private transport, accommodation, game drives, park fees, guide, bottled water</td>
              <td>Tips, personal expenses, Masai Village visit ($25), Balloon Safari ($470)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasaiMaraSafari;
