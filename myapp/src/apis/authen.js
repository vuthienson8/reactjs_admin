import axios from "axios"

const auth = {
    login: (data)=>{
        return axios.post("http://localhost:8080/api/login", data)
    }
}

export default auth