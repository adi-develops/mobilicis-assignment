import axios from 'axios';

const url = 'http://localhost:8000';

export const getUsers1 = async () => {
    try{
        let res  = await axios.get(`${url}/users1`)
        console.log(res)
        return res.data
    }
    catch(error){
        console.log("Error while getUsers API: ", error.message)
    }
}

export const getUsers2 = async () => {
    try{
        let res  = await axios.get(`${url}/users2`)
        console.log(res)
        return res.data
    }
    catch(error){
        console.log("Error while getUsers API: ", error.message)
    }
}

export const getUsers3 = async () => {
    try{
        let res  = await axios.get(`${url}/users3`)
        console.log(res)
        return res.data
    }
    catch(error){
        console.log("Error while getUsers API: ", error.message)
    }
}

export const getUsers4 = async () => {
    try{
        let res  = await axios.get(`${url}/users4`)
        console.log(res)
        return res.data
    }
    catch(error){
        console.log("Error while getUsers API: ", error.message)
    }
}

export const getUsers5 = async () => {
    try{
        let res  = await axios.get(`${url}/users5`)
        console.log(res)
        return res.data
    }
    catch(error){
        console.log("Error while getUsers API: ", error.message)
    }
}