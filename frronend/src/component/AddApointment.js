import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './addApp.css'
function  AddAppointment ({allAppointments}){
    const [appointment, setAppointment] = useState({ });
    const [idPatient, setIdPatient] = useState();
    const [idDoctor, setIdDoctor] = useState();
    const [patient, setPatient] = useState({}); 
    const [Doctors, setDoctors] = useState([]); 
    const {username} = useParams()
    const [Doctor, setDoctor] = useState(); 
    const [doctor1, setDoctor1] = useState({}); 

    useEffect(() => {
        axios
          .get(`http://localhost:8080/patients/${username}`)
          .then((response) => setPatient(response.data))
         
          .catch((error) => console.log(error));

          axios
          .get(`http://localhost:8080/doctors`)
          .then((response) => setDoctors(response.data))
         
          .catch((error) => console.log(error));
      
      },[patient,Doctor]);




    function selectOnChange (e){
        setDoctor(e.target.value)
       
      }
      axios
      .get(`http://localhost:8080/doctors/`+Doctor)
      .then((response) => setDoctor1(response.data))
      .catch((error) => console.log(error));

    const handleClick=(e)=>{
        e.preventDefault()
        const appointment1={appointment,idPatient,idDoctor}
        console.log(appointment1)
        fetch("http://localhost:8080/appointments",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(appointment1)
        }).then(()=>{
            console.log("New Appointment Added")
        })
    }
    return(
        <>
        <form>
        <h1>{patient.name}</h1>
        <label>pic doctor</label>
        <select id="selcetedOption"  onChange={selectOnChange}> 
          {Doctors.map((ele)=>{
        return<> <option id="op1"  >{ele.name}</option>
       {ele.name == Doctor? <h1>hi</h1>:"noooo"}

       {doctor1.timeList.map((e)=>{
                return <h1 >{e.appointmentTime}</h1>
                })                       
                       } 
       </>
                              })}
         </select>

         <br/>    
       
        </form>
        
        <label>date</label>
       
                  <br/>     
        </>
    )
}
export default AddAppointment;