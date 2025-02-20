import React from "react";
import "../css/styles.css"; // External CSS for styling

const MalindiWatamuTour = () => {
  return (
    <div className="tour-container">
      <h2>Malindi Watamu Tour - 8 Days, 7 Nights</h2>

      {/* Itinerary Table */}
      <div className="table-container">
        <h3>Itinerary</h3>
        <table className="tour-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Destination</th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Day 1</td><td>Nairobi → Malindi</td><td>Flight to Malindi, hotel check-in, relax at the beach</td></tr>
            <tr><td>Day 2</td><td>Mambrui Sand Dunes & Hell’s Kitchen</td><td>Visit Marafa Depression, explore Mambrui Sand Dunes, lunch at Mambrui Beach</td></tr>
            <tr><td>Day 3</td><td>Watamu Marine Park</td><td>Full-day dhow cruise, snorkeling, BBQ lunch</td></tr>
            <tr><td>Day 4</td><td>Mida Creek</td><td>Nature walk & canoe ride through mangroves</td></tr>
            <tr><td>Day 5</td><td>Sardegna Island</td><td>Full-day beach relaxation, diving, snorkeling, seafood BBQ</td></tr>
            <tr><td>Day 6</td><td>Malindi Market</td><td>Cultural tour, authentic street food, shopping</td></tr>
            <tr><td>Day 7</td><td>Leisure Day</td><td>Beach & resort relaxation, optional spa treatments</td></tr>
            <tr><td>Day 8</td><td>Malindi → Nairobi</td><td>Flight back to Nairobi, end of tour</td></tr>
          </tbody>
        </table>
      </div>

      {/* Tour Package Details */}
      <div className="table-container">
        <h3>Package Details</h3>
        <table className="tour-table">
          <thead>
            <tr>
              <th>Includes</th>
              <th>Excludes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Domestic flights, accommodation, park fees, meals, dhow cruise, snorkeling, Sardegna Island tour, professional guides</td>
              <td>Personal expenses, optional activities (scuba diving, spa treatments)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MalindiWatamuTour;
