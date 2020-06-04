import axios from 'axios';
const apiUrl='http://localhost:3001/apiv1/';

export async function getPatients(filter){
    try {
      
      let requestUrl=apiUrl+'patients';  

      if (filter){
        if (filter.name){
            requestUrl+='?name='+filter.name;
        }
        if (filter.lastName){
            if (filter.name){
                requestUrl+='&lastName='+filter.lastName;
            }
            else{
                requestUrl+='?lastName='+filter.lastName;
            }
        }
        if (filter.idNumber){
            if (filter.name||filter.lastName){
                requestUrl+='&idNumber='+filter.idNumber;
            }
            else{
                requestUrl+='?idNumber='+filter.idNumber;
            }
        }
      }else {
        //requestUrl+='patients';   
        
     }
     //  console.log(requestUrl);
      const response=await axios.get(requestUrl);


      if (response.statusText!=="OK") {
        throw new Error('Error saving patient');
        //return {state:'errored',message:'Error saving patient'};
     }
     return response.data.results;
    }  catch(error){
       console.log(error);
       throw error;
    }
}

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
    


