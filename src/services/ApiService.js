import axios from 'axios';
const apiUrl='http://localhost:3001/apiv1/';

export async function savePatient(patient){
try {   
    const requestUrl=apiUrl+'patients';
    const response=await axios.post(requestUrl, patient);
    if (response.statusText!=="OK") {
       throw new Error('Error saving patient');
       //return {state:'errored',message:'Error saving patient'};
    }

     return response; 
    }
    catch(error){
       console.log(error);
        throw error;

    }

}

export async function saveHistory(history){
    try {   
        const requestUrl=apiUrl+'history';
        console.log(history);
        const response=await axios.post(requestUrl, history);
        console.log('desde saveHistory');
        console.log(history);
        if (response.statusText!=="OK") {
           throw new Error('Error saving history');
           //return {state:'errored',message:'Error saving patient'};
        }
    
         return response; 
        }
        catch(error){
           console.log(error);
            throw error;
    
        }
    
    }
    


