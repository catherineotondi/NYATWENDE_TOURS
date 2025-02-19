import "../css/styles.css"
import myImage from "../img/sea.jpeg";
import myMission from "../img/mission.png";
import myVision from "../img/vision.jpeg";
import myValues from "../img/value.jpeg";


const Home = () => {
    return ( 
        <div className="allhomecontent">
            <section className='homepics' >
       
  
            </section>
            <section className='homedescription'>
          <h1>NYATWENDE TRAVEL AND TOURS COMPANY</h1>

          <div className="introcontent">
            <div  className="introparagraph">
              <p>Nyatwende Tours and Travel Company is your trusted partner in<br></br> delivering unforgettable 
                travel experiences. We specialize in<br></br> curated tours, personalized
            travel packages, and seamless<br></br> travel solutions, ensuring every journey is
            inspiring, <br></br>adventurous, and stress-free. Whether you're exploring<br></br> breathtaking
            landscapes, indulging in cultural experiences,<br></br> or planning a business trip,
                Nyatwende is dedicated to<br></br> making your travel dreams a reality.
                Nyatwende Tours and Travel<br></br> Company is your trusted partner in<br></br> delivering unforgettable 
                travel experiences. We specialize in<br></br> curated tours, personalized
            travel packages, and seamless<br></br> travel solutions, ensuring every journey is
            inspiring, <br></br>adventurous, and stress-free. Whether you're exploring<br></br> breathtaking
            landscapes, indulging in cultural experiences,<br></br> or planning a business trip,
                Nyatwende is dedicated to<br></br> making your travel dreams a reality.
                Nyatwende Tours and Travel<br></br> Company is your trusted partner in<br></br> delivering unforgettable 
                travel experiences. We specialize in<br></br> curated tours, personalized
            travel packages, and seamless<br></br> travel solutions, ensuring every journey is
            inspiring, <br></br>adventurous, and stress-free. Whether you're exploring<br></br> breathtaking
            landscapes, indulging in cultural experiences,<br></br> or planning a business trip,
            Nyatwende is dedicated to<br></br> making your travel dreams a reality.</p>
            </div>
            <div >
            <img
        src={myImage}
                alt="Beautiful Destination" 
                style={{ width: "500px", height:"500px" }}
        
      />
            </div>
          </div>
          
          
        </section>
        

        <section className="missiondivs">
        <div class="responsive">
  <div class="gallery">
    
      <img src={myMission} alt="Mission" style={{ width: "200px", height:"150px" }}/>
  
              <div class="desc">
                <h1>Our Mission</h1>
                <em>
                <p>"To provide exceptional travel experiences that inspire exploration, cultural exchange, and unforgettable memories.
            We are dedicated to offering personalized, reliable, and seamless travel services that cater to the unique needs and interests of every traveler."</p>

                </em>
         
    </div>
  </div>
          </div>
          
          <div class="responsive">
  <div class="gallery">
    
      <img src={myVision} alt="Vision" style={{ width: "200px", height:"150px" }}/>
  
              <div class="desc">
                <h1>Our  Vision</h1>
                <em>
                <p>To be the leading travel and tour company recognized for delivering innovative, sustainable, and enriching travel experiences, while promoting global connections and fostering a deeper appreciation for diverse cultures.</p>

                </em>
         

    </div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    
      <img src={myValues} alt="Values" style={{ width: "300px", height:"150px" }}/>
  
              <div class="desc">
              <h1>Our Values</h1>
                <p>
                  <em>Customer-Centric<br></br></em>
                  <em>
                  Integrity <br></br>
                  </em>
                  <em>Sustainability <br></br></em>
                  <em>Innovation <br></br></em>
                  <em>Cultural Respect<br></br></em>
                  <em>Excellence <br></br></em>
          





          </p>

    </div>
  </div>
          </div>
          







          
          
         
               
        </section> <br></br>
        
            <section className="testimonials">
          <h1>TESTIMONIALS</h1>
          <div className="testcontainer">
          <div className="test1">
              <p>
                <em>
                <b> James M. – Mombasa, Kenya<br></br><br></br></b>
                </em>
            
           
                "From start to finish, Nyatwende Travel provided exceptional service. Their knowledge of destinations and keen attention to detail made my trip seamless and stress-free. I felt like a VIP throughout the entire journey. Highly recommended!"
            </p>
 
            </div>


            <div className="test1">
              <p>
                <em>
                <b> Tom L. – Kampala, Uganda<br></br><br></br></b>
                </em>
            
           
                "Nyatwende Travel offers top-notch service with a personal touch. The team took time to understand our needs and crafted an itinerary that exceeded our expectations. Every moment was well planned, and we felt cared for at every step. Thank you for an amazing adventure!"
              </p>
              

 
            </div>

            <div className="test1">
              <p>
                <em>
                <b>  Sophia Njeri. — Mombasa<br></br><br></br></b>
                </em>
            
           
                "I wanted a customized holiday for my family, and Nyatwende delivered beyond our expectations. From personalized itineraries to seamless hotel bookings, every part of our trip was flawless. The team is professional, friendly, and very knowledgeable."
              </p>
              
              
 
            </div>


            <div className="test1">
              <p>
                <em>
                <b>  Kim and Jane. — UK<br></br><br></br></b>
                </em>
            
           
                "Our beach holiday at Diani was simply magical! Thanks to Nyatwende, we stayed in a stunning beachfront resort and enjoyed hassle-free transfers. The attention to detail made it an unforgettable experience. We’re already planning our next trip with them!"              </p>
              
              
 
            </div>

            <div className="test1">
              <p>
                <em>
                <b>Maria Njuguna. — Eldoret<br></br><br></br></b>
                </em>
            
           
                "The travel consultation services at Nyatwende were extremely helpful. They provided expert advice, especially on travel documentation and visa requirements. It saved me a lot of time and stress."              </p>
              
              
 
            </div>
            
      
         

 
          </div>
          
            </section>
            
            

           
    

          
        </div>
     );
}
 
export default Home;