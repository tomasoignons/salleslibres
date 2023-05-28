import axios from "axios";

// posts
export const GET_DOCUMENTS = "GET_DOCUMENTS"

export const getDocuments = () =>{
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/document/`)
            .then((res)=>{
                console.log("on est ici")
                dispatch({ type : GET_DOCUMENTS, payload: res.data})
            })
            .catch((err) => console.log(err))
        
    }
}