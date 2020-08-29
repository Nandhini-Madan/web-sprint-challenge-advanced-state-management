import axios from "axios";
export const FETCHING_SMURFS_START="FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS="FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_ERROR="FETCHING_SMURFS_ERROR";
//Action

const headers = {
    Accept: "application/json"
  };
export const getSmurfs=()=>(dispatch)=>
{

console.log("Smurfs ACTION");
dispatch(
    {
        type:FETCHING_SMURFS_START
    });
axios
.get("http://localhost:3333/smurfs", { headers: headers })
.then((res)=>{
    console.log("resukt",res);
    dispatch({
        type:FETCHING_SMURFS_SUCCESS,
        payload:res
    });
})
.catch((err)=>{
    dispatch({
        type:FETCHING_NEWS_ERROR,
        payload: `${err.response.message} code: ${err.response.code}`
    });
    console.log("error",err);
})

};