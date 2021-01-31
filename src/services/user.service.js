import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/test";

const getPoste = () => {
    return axios.get(API_URL+'poste');
}

const getUser= () => {
    return axios.get(API_URL+ 'user',{headers: authHeader()});
}

export default {
    getPoste,
    getUser
}