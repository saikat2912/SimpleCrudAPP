import React,{useState,useEffect} from "react";

export default function LoginPage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const login =()=>{
        
    }

    return(
        <div className="container">
            <div
             className="form">
                <label>Username</label><br/>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button onClick={login}>Submit</button>
             </div>
        </div>
    )
}