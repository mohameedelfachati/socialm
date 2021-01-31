import axios from "axios";
const API_URL = "http://localhost:8080/api/auth";

const signup =(username,email,password,imageUrl)=>{
    return axios.post(API_URL+"signup",{
        username,
        email,
        password,
        imageUrl
    });
};

const login =(email,password)=>{
    return axios.post(API_URL+"signin",{
        email,
        password
    }).then((response)=>{
        if (response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(response.data))
        }
        return response.data;
    })
};
    const poste= (imageUrl,message)=>{
          return axios.post(API_URL+'poste',{
           imageUrl,
           message
    })
}

const logout = () =>{
    localStorage.removeItem("user");
};

export default {
    signup,
    login,
    logout,
    poste
}