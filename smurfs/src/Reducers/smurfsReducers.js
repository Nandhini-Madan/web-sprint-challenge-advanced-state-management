import {FETCHING_SMURFS_START,FETCHING_SMURFS_SUCCESS,FETCHING_SMURFS_ERROR} from "../actions/smurfsActions";
const initialState={
    smurfs:"",
    isFetching:false,
    error:""
}

export const newsListReducer=(state=initialState,action)=>{
switch(action.type){
    case FETCHING_NEWS_START:
        console.log("Fetching New Start");
        return{
            ...state,isFetching:true
        }
     case FETCHING_NEWS_SUCCESS:
         console.log("Fetching News Success");
         return{
             ...state, news:action.payload, isFetching:false
         } 
    case FETCHING_NEWS_ERROR:
        console.log("Fetching Errr");
        return{
            ...state,isFetching:false,error:action.payload
        } 
        default:
            return state      
}
};