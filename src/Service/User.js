import {axiosRequestHandler} from "../Helper/ApiHelper";

export async function signUp(payload) {
        try{
            const {error, data} = await axiosRequestHandler(`/signup`, "POST", payload);
            if(error){
                console.log('Error', error);
                return error.response.data.error;
            }
            console.log(data);
            return  Promise.resolve(data.message);
        }catch(err){
            console.log(err);
            return Promise.reject(err);
        }
}

export async function login(payload){
    try{
        const {error, data} = await axiosRequestHandler("/login" , "POST", payload);
        if(error){
            console.log('Error', error.response.data.error);
            return error.response.data.error;
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('username', data.username);
        console.log('Data', data);
        return  Promise.resolve(data);
    }catch(err){
        console.log(err);
    }
}