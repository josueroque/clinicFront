import React, {createContext,useState,useEffect} from 'react';
import{savePatient,saveHistory,getPatients} from '../services/ApiService';

export const PatientsContext=createContext();
export const savePatientFunction=savePatient;
export const saveHistoryFunction=saveHistory;
export const getPatientsFunction=getPatients;

const PatientsProvider=(props)=>{
    
   
   return(
       <PatientsContext.Provider
       value={{
           savePatientFunction,
           saveHistoryFunction,
           getPatientsFunction
       }}
       >
           {props.children}
       </PatientsContext.Provider>
   )
   
}

export default PatientsProvider;
