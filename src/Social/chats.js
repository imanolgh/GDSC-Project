import React from 'react'
import {useNavigate} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {auth} from "../utils/firebase"


const Chats = () => {

    const navigate = useNavigate();
    const handleSignOut = async () => {
        await auth.signOut();
        navigate('/')
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Ukrainians Connect
                </div>
                <div className="logout-tab" onClick={handleSignOut}>
                    Logout
                </div>
            </div>
            <ChatEngine 
                height="calc(100vh - 66px)"
                projectId="8807bbdf-8699-4ddf-ba74-00caa071bdf8"
                userName="."
                userSecret="."
            />

        </div>
    )
}

export default Chats;