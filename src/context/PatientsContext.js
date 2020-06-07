import React, {createContext,useState,useEffect} from 'react';
import{savePatient,saveHistory,getPatients
        ,getPatientId, updatePatient, getHistoryId
        ,updateHistory} from '../services/ApiService';

export const PatientsContext=createContext();
export const savePatientFunction=savePatient;
export const saveHistoryFunction=saveHistory;
export const getPatientsFunction=getPatients;
export const updatePatientFunction=updatePatient;
export const getPatientIdFunction=getPatientId;
export const getHistoryIdFunction=getHistoryId;
export const updateHistoryFunction=updateHistory;
const PatientsProvider=(props)=>{
    
   
   return(
       <PatientsContext.Provider
       value={{
           savePatientFunction,
           saveHistoryFunction,
           getPatientsFunction,
           updatePatientFunction,
           getPatientIdFunction,
           getHistoryIdFunction,
           updateHistoryFunction
       }}
       >
           {props.children}
       </PatientsContext.Provider>
   )
   
}

export default PatientsProvider;
