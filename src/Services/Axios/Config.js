import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";




const ApiRequest = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    headers: {
        Authorization : `${localStorage.getItem('userToken')}`
    },
})

ApiRequest.interceptors.request.use(
    (config) => {return config},
    (error) => {return Promise.reject(error)}
    )

ApiRequest.interceptors.response.use(
    (response => {
        return response
    }),
    (error) => {
        if(!axios.isCancel()){
            toast.error(`${error.response.data.error}`)
        }
      
        return Promise.reject(error)
    }
)

export default ApiRequest