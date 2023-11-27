"use client";
import React from "react";
import { useState } from "react";
import "./practis.css";



const Practis = () => {
const [count, setCount] = useState(0);
const [user, setUser] = useState( { name: "", City: "", Age: "" } )



const handleOnClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
   //  setCount(count + 1);

   const handleUserDetails = (e) => {
     
   };
    
}

  return (
   <div className="container-box">
        <h1>Welcom to my Tutoria</h1>
       <div className="container-size">
          <p>Counting from : {count}</p>
          <button className="btn-click" onClick={handleOnClick}>
             Click Me   
         </button>       
       </div>
         <div className="container-name">
             <form className="form-detail">
               <input type="text"
               placeholder="First name" />
                <input type="text"
               placeholder="Last name" />
                <input type="text"
               placeholder="gmail" />
                <input type="text"
               placeholder="password" />
                <input type="text"
               placeholder="address" />
                <input type="text"
               placeholder="Zip code" />
             </form>
             <button>
               Submit
             </button>
         </div>
   </div>
  )
}

export default Practis