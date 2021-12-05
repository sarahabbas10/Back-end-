
import axios from "axios";
import { useState, useEffect } from "react";
import AddApointment from "./AddApointment";
import Navbar from "./Navbar";
import Spicality from './Spicality'
import './appointment.css'
function Appointments(){
    const [allAppointments, setAllAppointments] = useState([]);
      
axios.get('http://localhost:8080/appointments')
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});

useEffect(() => {
  axios
    .get("http://localhost:8080/appointments")
    .then((response) => setAllAppointments(response.data))
     //response.data.items[0].snippet.thumbnails.high.url
    .catch((error) => console.log(error));

},[allAppointments]);
return (
    <>
    <Navbar/>

<div class="banner3">
  <div class="py-5 banner" >
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-lg-5">
          <h3 class="my-3 text-white font-weight-medium text-uppercase">Book Appointment</h3>
        
              
    <button type="button" class="btn btn-primary" >
    Book a general appointment

    </button>
    <br/>
    <br/>
    <br/>
    <button type="button" class="btn btn-primary" >
    Book an appointment for the dental clinic
    </button>
    <br/>
    <br/>
    <br/>
    
    <button type="button" class="btn btn-primary" onClick={<Spicality/>}>
    Book an appointment for a dermatology clinic
    </button>

    <br/>
    <br/>
    <br/>
    <button type="button" class="btn btn-primary" onClick={<Spicality/>}>
    Book an appointment for an orthopedic clinic 
    </button>

           </div>
           </div>
           </div>
           </div>
           </div>

           
 
  </>
);
}

export default Appointments;

// <div >
// <table>
// <tr>
// <th>Appointmen ID</th>
// <th>Paiton Name</th>
// <th>Doctor Name</th>
// </tr>
// {allAppointments.map((ele,index)=>{
// <tr>
// <td>{ele.idAppointment}</td>
// <td>{ele.patient.name}</td>
// <td>{ele.doctor.name}</td>
// </tr>
// }    
// )
// }



// </table>

// <AddApointment allAppointments={allAppointments}/>
// </div>