import axios from 'axios';
const API_URL = 'http://127.0.0.1:5000/api/';
export class APIService{

    constructor(){
    }

    static getProject(id) {
        const url = `${API_URL}project/${id}/info.json`;
        return axios.get(url, { method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }}).then(response => response.data);
    }
}