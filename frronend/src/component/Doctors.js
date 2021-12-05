import { useState, useEffect } from "react";
import axios from "axios";
import Doctor from './Doctor'
import Navbar from "./Navbar";
function Doctors(){
    console.log("In Doctors");
    const [allAallDoctors ,setAllDoctors] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:8080/doctors")
          .then((response) => setAllDoctors(response.data))
           //response.data.items[0].snippet.thumbnails.high.url
          .catch((error) => console.log(error));
      
      },[allAallDoctors]);

      console.log(allAallDoctors);

return(
    <>
    <Navbar/>
      {allAallDoctors.map((element)=>{
       return(
          <Doctor
     
          doctor={element}
         
          />
        )
        })} 
</>
) 

}

export default Doctors;