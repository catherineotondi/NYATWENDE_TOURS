import React from "react";
import "../css/styles.css"; // External CSS for styling

const Amboseli = () => {
  return (
    <div className="amboseli-container">
      <h2>3 Days, 2 Nights Amboseli Safari</h2>
      
      {/* Table Section */}
      <div className="amboselitable-container">
        <table className="amboselisafari-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pick-Up & Drop-Off</td>
              <td>Nairobi</td>
            </tr>
            <tr>
              <td>Destination</td>
              <td>Amboseli National Park</td>
            </tr>
            <tr>
              <td>Attractions</td>
              <td>Mt. Kilimanjaro, Elephants, Lions, Cheetahs, Zebras, Giraffes, Savannah Landscapes</td>
            </tr>
            <tr>
              <td>Game Drives</td>
              <td>3 Game Drives</td>
            </tr>
            <tr>
              <td>Accommodation</td>
              <td>Amboseli Lodge/Camp (Full Board)</td>
            </tr>
            <tr>
              <td>Transport</td>
              <td>4WD Safari Landcruiser/Van (Private)</td>
            </tr>
            <tr>
              <td><b>Included</b></td>
              <td>Park Fees, Accommodation, Meals, Game Drives, Bottled Water</td>
            </tr>
            <tr>
              <td><b>Excluded</b></td>
              <td>Tips, Gratuities, Masai Village Visit (USD 20), Balloon Safari (USD 500)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Amboseli;
