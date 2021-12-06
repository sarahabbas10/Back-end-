import axios from "axios";
import { useState, useEffect } from "react";
import DoctorName from "./DoctorName";
function AddAppointment(){

  const [Doctors, setDoctors] = useState([]);
  const [specialty, setSpecialty] = useState(); 
  const [doctor1, setDoctor1] = useState({});  
 



// if(Doctor){
//   axios
// .get(`http://localhost:8080/doctors/`+Doctor)
// .then((response) => setDoctor1(response.data))
// .catch((error) => console.log(error));
//   }


    function selectOnChange (e){
      setSpecialty(e.target.value)
        }


    return(
        <>
            <form class="requires-validation" novalidate>
       
        <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Book Appointment </h3>
                       
                           <div class="col-md-12">
                             <label>Selsect clinic</label>
                                <select class="form-select mt-3" required onChange={selectOnChange}>
                              
                                 <option id="op1" >Genral</option>
                                 <option id="op1">Dermatologist</option>
                                 <option id="op1" >Orthopedic</option>
                                 <option id="op1" >Dentist</option>

                               </select>
                            </div>
                            <label>Selsect Doctor</label>
       { specialty ?  < DoctorName specialty={specialty}  /> :""}
                  <br/>  
                        
                    </div>
                </div>
            </div>
        </div>
        </div> 

         <br/>    
       
    
            </form>      

 
  </>
    )
}
export default AddAppointment;