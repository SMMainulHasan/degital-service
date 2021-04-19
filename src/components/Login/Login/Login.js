import React, { useContext} from 'react';
import './Login.css'

import Navbar from '../../Shared/Navbar/Navbar';
import google from '../../../Image_Icon/Icon/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import { firebaseConfig } from '../FirebaseConfig/FirebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [user, setUser] = useContext(userContext);
    
    
    const location = useLocation();
    const history = useHistory();

    let { from } = location.state || { from: { pathname: "/" } };


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleLogin = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { photoURL, email, displayName } = result.user;
                // setUser({ name: displayName, email: email, displayPic: photoURL });
                fetch(`http://localhost:8080/getAdminRole?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setUser({ name: displayName, email: email, displayPic: photoURL, role: data.admin })
                    history.replace(from);
                })
            }).catch((error) => {
                // var errorCode = error.code;
            });
    }

    //Set user roll
    // const setUserRole = () => {
            
    // }


    return (
        <div className="login">
            <Navbar />
            <div className="d-flex justify-content-center">
                <div onClick={googleLogin} className="d-flex align-items-center google-btn">
                    <img src={google} alt="" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <h4 className="text-white">Login with Google</h4>
                </div>
            </div>
        </div>
    );
};

export default Login;