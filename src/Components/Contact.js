// import { Mail, Phone, MapPin } from "lucide-react"; 


// const Contact = () => {
//     return ( 

       
   
//      <div>

//         <section className="contactimage">
//         <h1>Contact Us</h1>

//             </section>
            
//             <section className="contactdetails">
//             <div >
//       <h2>Contact Us</h2>
      
//       <div>
//         {/* Email */}
//         <div>
//           <Mail/>
//           <p>
//             <span>Email: </span>
//             info@nyatwende.com
//           </p>
//         </div>

//         {/* Phone */}
//         <div>
//           <Phone />
//           <p className="text-lg">
//             <span className="font-medium">Phone: </span>
//             +254 712 345 678
//           </p>
//         </div>

//         {/* Address */}
//         <div className="flex items-center">
//           <MapPin className="w-6 h-6 text-red-500 mr-4" />
//           <p className="text-lg">
//             <span className="font-medium">Address: </span>
//             Nyatwende Travel, Nairobi, Kenya
//           </p>
//         </div>
//       </div>
//     </div>
//             </section>

   
    
            
          

//             {/* <section>
//             <div className="contactinfo">
//                     <address>
//                     <strong>NYATWENDE TOURS AND TRAVEL COMPANY</strong><br></br>
//               NGARA, FIGTREE
//                                 Nairobi, 00600-KIPANDE ROAD
//                     </address>
            
    
//             <address>
//             <p><strong>Email us on:</strong></p>
//              <p> <a href="mailto:catherineotondi@gmail.com"><span class="emailtext">catherineotondi@gmail.com</span></a></p>
//             </address>
//                 </div>
//                 </section> */}
            
                
            
//         </div>


        

          
        
//      );
// }
 
// export default Contact;


import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contactupper">
       
       <h1>Ready to Travel, Lets Chat</h1>

      </section>
      
      <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>

        {/* Address */}
        <div className="contact-info">
          <span className="icon">📍</span>
          <p><strong>Address:</strong> Nairobi, Kenya</p>
        </div>

        {/* Email */}
        <div className="contact-info">
          <span className="icon">✉️</span>
          <p><strong>Email:</strong> info@nyatwende.com</p>
        </div>

        {/* Phone */}
        <div className="contact-info">
          <span className="icon">📞</span>
          <p><strong>Phone:</strong> +254 712 345 678</p>
        </div>
      </div>
    </div>
    


    </div>
    
  );
};

export default Contact;