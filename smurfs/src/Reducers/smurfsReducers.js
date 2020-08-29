import {FETCHING_SMURFS_START,FETCHING_SMURFS_SUCCESS,FETCHING_SMURFS_ERROR} from "../Actions/smurfsActions";
const initialState={
    smurfs:[{"name":"Initial Fetch","age":200,"height":"5cm","id":0}],
    isFetching:false,
    error:""
}

export const newsListReducer=(state=initialState,action)=>{
switch(action.type){
    case FETCHING_SMURFS_START:
        console.log("Fetching New Start");
        return{
            ...state,isFetching:true
        }
     case FETCHING_SMURFS_SUCCESS:
         console.log("Fetching News Success");
         return{
             ...state, news:action.payload, isFetching:false
         } 
    case FETCHING_SMURFS_ERROR:
        console.log("Fetching Errr");
        return{
            ...state,isFetching:false,error:action.payload
        } 
        default:
            return state      
}
};