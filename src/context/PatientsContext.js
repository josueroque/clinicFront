import React, {createContext,useState,useEffect} from 'react';
import{savePatient} from '../services/ApiService';

export const PatientsContext=createContext();
export const savePatientFunction=savePatient;
const PatientsProvider=(props)=>{
    
  
   
   return(
       <PatientsContext.Provider
       value={{
           savePatientFunction
       }}
       >
           {props.children}
       </PatientsContext.Provider>
   )
   
}

export default PatientsProvider;
