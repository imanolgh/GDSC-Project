import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';

import {auth} from "../utils/firebase"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
            <form onSubmit={handleSignin}>
                <h1>Log In To Your Account</h1>
                <input type="email" placeholder="Enter Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
               
                <input type="password" placeholder="Enter Your password" value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default SignIn 