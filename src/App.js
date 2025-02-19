import Home from './Components/Home';
import Layout from './Components/Layout';
import About from './Components/About';
import Services from './Components/Services'
import Contact from './Components/Contact'
import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    
    </Router>
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
