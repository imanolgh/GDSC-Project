import React, {useEffect, useState} from 'react';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from "../utils/firebase"

const CheckUser = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user);
            }
            else{
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, [])

    const handleSignout = () => {
        signOut(auth)
        .then(() => {
            console.log("Signout Successful");
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div> {authUser ? <><p> {'Signed in as'} ${authUser.email} </p><button onClick={handleSignout}>Log out</button> </>: <p>Logged Out</p>}
        </div>
    )
}

export default CheckUser