import { login,logout,addUser,updateUsersProfileById,editUserFromAdminById,allUsers,usersProfileByid,confirmUser,searchUsers,deleteUser } from "../../routes/api";
import {setUser,removeUser} from '../../utils/localStorage';
import { toast } from 'react-toastify';
import {
        USER_LOGIN_FAIL,
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGOUT,
    } from "../actiontypes/authConstants";
    export const loginUser = (postbody) => async (dispatch) => {
        // Login dispatch
        dispatch({ type: USER_LOGIN_REQUEST });
    
        await login(postbody).then(response => {
            console.log("API Response Data: Login", response.data);  // ✅ Check if companyLogo is present

            if (response.status === 201 && response.data.role === 'Company') {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
                setUser(response.data);
                toast.success('Company User is Logged in Successfully!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
                });
            } else if (response.data === 404) {
                dispatch({
                    type: USER_LOGIN_FAIL,
                    payload: 'Company User is not registered with us!'
                });
                toast.error('Company User is not registered with us!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
                });
            } else if (response.data === 400) {
                dispatch({
                    type: USER_LOGIN_FAIL,
                    payload: 'Entered Email/Password is wrong!'
                });
                toast.error('Entered Email/Password is wrong!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
                });
            } else if (response.data.role !== 'Company') {
                dispatch({
                    type: USER_LOGIN_FAIL,
                    payload: 'Only Company User are allowed to login!'
                });
                toast.error('Only Company User are allowed to login!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
                });
            } else {
                dispatch({
                    type: USER_LOGIN_FAIL,
                    payload: response.data
                });
                toast.error(response.data, {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
                });
            }
            document.getElementById("submitting").innerText = "Login";
            document.getElementById("submitting").disabled = false;
        }).catch(error => {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.message
            });
    
            toast.error(error.message, {
                position: "bottom-right",
                hideProgressBar: false,
                progress: undefined,
            });
            document.getElementById("submitting").innerText = "Login";
            document.getElementById("submitting").disabled = false;
        });
    };
export const logoutUser = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT }); 
    await logout().then(response => {
    if(response.status===201) {
            removeUser();
            toast.success('Company User is Logged Out Successfully!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
            });
            
    }
    else if(response.status===208){
            toast.error('Company User is already Logged out successfully!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
            });
    }       
    }).catch(error =>{
            toast.error(error.maessage, {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
            });
    });  
  
}