import React, {createContext} from 'react';
import{saveUser,loginUser} from '../services/ApiService';
//import { ContextReplacementPlugin } from 'webpack';

export const UsersContext=createContext();
export const saveUserFunction=saveUser;
export const loginUserFunction=loginUser;
export const auth={};
export const setAuthFunction=async(user)=>{
   // auth=user;
   // console.log(user);
   // return auth;
   let response= await loginUser(user);
   auth.token=response.token;
   auth.user=user;
  // console.log(auth);
   return ; 
};

export const logoutFunction=async(user)=>{
    // auth=user;
    // console.log(user);
    // return auth;
    auth.token=null;   // console.log(auth);
    return ; 
 };

const UsersProvider=(props)=>{
  
   return(
       <UsersContext.Provider
       value={{
           saveUserFunction,
           loginUserFunction,
           setAuthFunction,
           logoutFunction,
           auth
       }}
       >
           {props.children}
       </UsersContext.Provider>
   )
   
}

export default UsersProvider;
