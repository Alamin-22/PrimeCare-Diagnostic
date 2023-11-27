import PropTypes from 'prop-types';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import auth from '../Config/firebase.config';
import AxiosPublic from "../Hooks/AxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const axiosPublic = AxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // create User
    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Social Login Google

    const GoogleProvider = new GoogleAuthProvider();
    const GoogleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

    // logout

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Update User Profile
    const UpdateProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }


    // MANAGE uSER
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            if (currentUser) {
                // get token and store in the client site
                const userInfo = { email: currentUser.email };
                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("AccessToken", res.data.token);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            } else {
                // remove token if the token is stored in the cline site or server site or http only cookie. 
                localStorage.removeItem("AccessToken");
            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])



    // send the value to the Context
    const value = {
        user, loading,
        CreateUser,
        logOut,
        Login,
        GoogleSingIn,
        UpdateProfile,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;