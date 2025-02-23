import Home from './Components/Home';
import Layout from './Components/Layout';
import About from './Components/About';
import Services from './Components/Services'
import Contact from './Components/Contact'
import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Amboseli from './Components/Amboseli';
import KenyaSafaris from './Components/KenyaSafaris';
import KilimanjaroSafari from './Components/KilimanjaroSafari';
import NairobiParkTrip from './Components/NairobiParkTrip';
import MasaiMaraSafari from './Components/MasaiMaraSafari';
import MalindiWatamuTour from './Components/MalindiWatamuTour';
import { HashRouter,Route, Routes } from "react-router-dom";
import Travelpackages from './Components/Travelpackages';



const App = () => {
  return (
    <HashRouter>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Travelpackages />} />
          <Route path="/amboseli" element={<Amboseli />} />
          <Route path="/safari-highlights" element={<KenyaSafaris />} />
          <Route path="/kilimanjaro" element={<KilimanjaroSafari />} />
          <Route path="/nairobi-park" element={<NairobiParkTrip />} />
          <Route path="/wildebeest-migration" element={<MasaiMaraSafari />} />
          <Route path="/malindi-watamu" element={<MalindiWatamuTour />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    
    
  {/* <App /> */}
</HashRouter>
    
  );
};

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* <Home /> */}
//       {/* <About /> */}
//       {/* <Service /> */}
//       {/* <Contact /> */}

//     </div>
//   );
// }

// export default App;
