import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../utils/firebase"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div 
            className="container">
            <form onSubmit={handleSignup}>
                <h1>Create Account</h1>
                <input type="email" placeholder="Enter Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
               
                <input type="password" placeholder="Enter Your password" value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup 