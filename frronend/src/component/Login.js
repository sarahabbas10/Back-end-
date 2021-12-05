import './login.css';
import Patient from './Patient';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function Login (){
    const navigate = useNavigate();
    const [username, setUsername] = useState();

const onChange=(e)=>{
let user=e.target.value
setUsername(user);
}

 const log=()=>{
    console.log(username);
    <Patient username={username}/>
       navigate("/patient/"+username);
      
    }

return (

<div class="row">
    <div class="col-md-6 mx-auto p-0">
        <div class="card">
            <div class="login-box">
                <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked/>
                <label for="tab-1" class="tab">Login</label> 
                <input id="tab-2" type="radio" name="tab" class="sign-up"/>
                <label for="tab-2" class="tab">Sign Up</label>
                    <div class="login-space">
                        <div class="login">
                            <div class="group">
                                 <label for="user" class="label">Username</label> 
                                 <input id="user" type="text" class="input" placeholder="Enter your username"onChange={onChange}/> </div>
                            <div class="group"> 
                            <label for="pass" class="label">Password</label>
                             <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password"/> 
                             </div>
                            <div class="group">
                                 <input id="check" type="checkbox" class="check" checked/> 
                                 <label for="check"><span class="icon">
                                </span> Keep me Signed in</label> 
                                </div>
                            <div class="group">
                                 <input type="submit" class="button" value="Sign In" onClick={log}/> 
                                 </div>
                            <div class="hr"></div>
                           
                        </div>
                        <div class="sign-up-form">
                            <div class="group"> <label for="user" class="label">Username</label> <input id="user" type="text" class="input" placeholder="Create your Username"/> </div>
                            <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Create your password"/> </div>
                            <div class="group"> <label for="pass" class="label">Repeat Password</label> <input id="pass" type="password" class="input" data-type="password" placeholder="Repeat your password"/> </div>
                            <div class="group"> <label for="pass" class="label">Phone number</label> <input id="pass" type="text" class="input" placeholder="Enter your phone number"/> </div>
                            <div class="group"> <label for="pass" class="label">Date of birth</label> <input id="pass" type="date"  class="input" data-type="date"/> </div>
                            <div class="group"> <label for="pass" class="label">Gender</label> <input id="pass" type="text"  class="input" data-type="text"/> </div>
                            <div class="group"> <label for="pass" class="label">Blood type</label> <input id="pass" type="text"  class="input" data-type="text"/> </div>
                            <div class="group"> <label for="pass" class="label">Weight</label> <input id="pass" type="text"  class="input" data-type="text"/> </div>
                            <div class="group"> <label for="pass" class="label">Height</label> <input id="pass" type="text"  class="input" data-type="text"/> </div>

                            <div class="group"> <input type="submit" class="button" value="Sign Up"/> </div>
                            
                            <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>
    

)
}

export default Login;