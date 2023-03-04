import {useAuthContext} from"../hooks/useAuthContext"
import {useWorkoutsContext} from "../hooks/useWorkoutsContext"
export const useLogout=()=>{

    const{dispatch}=useAuthContext()
const {dispatch:dispatchWorkouts}=useWorkoutsContext()
    const logout=()=>{
        //remove user from local storage

        localStorage.removeItem('user')
        //dispatch logout 
        dispatch({type:"LOGOUT"})
        dispatchWorkouts({type:"SET_WORKOUTS",payload:null})
    }
    return {logout}
}