import React, {useState} from 'react'
import {login} from "../Service/User";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const onUsernameHandler = (e) => {
        setUsername(e.target.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const loginHandler = async (e) => {
        if(!username || !password){
            toast.warning('Username or password is not provided');
        }
        const payload = {
            username,
            password
        }
        const response = await login(payload);
        if(response.token){
            toast.success('Logged in Successfully');
            setTimeout(() => navigate('/main'), 2000)
        }else{
            toast.error(response);
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
                    <h1 className="header" >LOGIN</h1>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" value={username} className="form-control" onChange={onUsernameHandler} placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" value={password} className="form-control" onChange={onPasswordHandler} placeholder="Password" />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block login-button" onClick={loginHandler}>LOGIN</button>
                            <div className="message">
                                <div><a href="#">Forgot your password</a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;