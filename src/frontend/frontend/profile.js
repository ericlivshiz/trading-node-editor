import React from "react"
import Header from './util/header'
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
    const {setLoggedIn} = props;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        navigate("/");
    }
    return (
        <div className="profilecontainer">
            <Header />
            <h1> My Profile Page!</h1>
            <p>Here users can see/edit info about there profile!</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Profile;