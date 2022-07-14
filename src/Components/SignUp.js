import React, {useState} from 'react'
import {signUp} from "../Service/User";
import {toast, ToastContainer} from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const onUsernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const submit = async(e) => {
        e.preventDefault();
        const payload = {
            username,
            email,
            password,
            confirmPassword
        };

        //username validation
        if(username.length < 3){
            return toast.warning("Username length must be at least 3 characters");
        }

        //password mis-match
        if(password !== confirmPassword){
            return toast.warning("Password mismatch");
        }

        const response = await signUp(payload);
        console.log('Response', response);
        if(response === "SignUp Successfully"){
            toast.success("SignUp Successfully");
            setTimeout(() => navigate('/'), 2000)
        }else{
            toast.warning(`${response}`);
            setTimeout(() => navigate('/login'), 2000);
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container">
                <div className="form-box">
                    <h1 className="header-signup" >SIGNUP</h1>
                    <div className="body-form">
                        <form onSubmit={submit}>
                            <div className="input-group mb-3">
                                <input type="text" value={username} className="form-control" onChange={onUsernameHandler} placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" value={email} className="form-control" onChange={onEmailHandler} placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" value={password} className="form-control" onChange={onPasswordHandler} placeholder="Password" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" value={confirmPassword} className="form-control" onChange={onConfirmPasswordHandler} placeholder="Confirm-Password" />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block sign-button" onClick={submit}>SIGN-UP</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;