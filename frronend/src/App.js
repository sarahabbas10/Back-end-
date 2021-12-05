import axios from "axios";
import { useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './component/Login';
import Patient from './component/Patient';
import Appointments from "./component/Appointments";
import './App.css'
import Doctors from "./component/Doctors";
import Doctor from "./component/Doctor";
import AddAppointment from './component/AddApointment'



function App() {
  useEffect(() => { 
  // GET request for remote image in node.js
  axios
  .get('http://localhost:8080/')
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
},[]);
  return (
  

      <BrowserRouter>
    
      <div>
      <Routes>
      
          <Route path="/" element={<Login />} />
          <Route path="/patient/:username" element={<Patient />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/addAppointment/:username" element={<AddAppointment />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/doctor" element={<Doctor />} />
      </Routes>
      </div>

      </BrowserRouter>
    
  );
}

export default App;
