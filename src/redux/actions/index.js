import axios from "axios";
const { API_KEY,API_URL }=process.env;

export const GET_USER="get_user";
export const GET_ALL_PRODUCTS="get_all_products"

const urlUser="https://coding-challenge-api.aerolab.co/user/me"
const urlProducts="https://coding-challenge-api.aerolab.co/products"
export const getUser=()=>{
    return async function(dispatch){
        try {
            const res=await axios.get( urlUser,{ headers:{"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhYzJjOTMwODYzNTAwMjEzN2Y1MzciLCJpYXQiOjE2MzU0MzUyMDl9.ljzbI1FdHG1ROZyJBEhkbBn5zIa0zW1irL0gCVtZIhk"} })
        
            return dispatch({
                type: GET_USER,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}
export const getAllProducts=()=>{
    return async function(dispatch){
        try {
            const res=await axios.get( urlProducts,{ headers:{"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhYzJjOTMwODYzNTAwMjEzN2Y1MzciLCJpYXQiOjE2MzU0MzUyMDl9.ljzbI1FdHG1ROZyJBEhkbBn5zIa0zW1irL0gCVtZIhk"} })
        
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}