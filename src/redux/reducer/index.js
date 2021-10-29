import { GET_USER, GET_ALL_PRODUCTS} from "../actions"

const initialState={
    user:{},
    buyHistory:[],
    products:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;