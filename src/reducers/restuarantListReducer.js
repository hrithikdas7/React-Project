import { R_FAIL,R_SUCCESS } from "../constants/restuarantConstants";

export const restuarantListReducer = (state={restuarantList:[]},action)=>{
switch(action.type){
    case R_SUCCESS:
        return{restuarantList:action.payload}
    case R_FAIL:
        return{
            restuarantList:action.error
        }
    default:
        return state
}


}