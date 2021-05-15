import Axios from 'axios';
const searchURL = "https://randomuser.me/api/?results=25"

//getting employee data
const API = {
    getEmpData: function () {
        return Axios.get(searchURL);
    }
};