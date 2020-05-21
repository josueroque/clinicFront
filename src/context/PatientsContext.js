import React, {createContext,useState,useEffect} from 'react';
import{savePatient,saveHistory} from '../services/ApiService';

export const PatientsContext=createContext();
export const savePatientFunction=savePatient;
export const saveHistoryFunction=saveHistory;

const PatientsProvider=(props)=>{
    
  
   
   return(
       <PatientsContext.Provider
       value={{
           savePatientFunction,
           saveHistoryFunction
       }}
       >
           {props.children}
       </PatientsContext.Provider>
   )
   
}

export default PatientsProvider;
