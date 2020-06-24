import axios from 'axios';
const apiUrl='http://localhost:3001/apiv1/';

export async function saveUser(user){  
    try {
         
       const requestUrl =apiUrl +'/authenticate/register';
  
       const response = await axios.post(requestUrl, user );
       if (response.statusText!=="OK") {
         throw new Error('Error saving user');
       }
 
       return response; 
      
   }
   catch(error){
       console.log(error.response);
       throw error.response;
   }
 }
 
 export async function loginUser(user){  
   try {
     
      const requestUrl =apiUrl +'authenticate';
      // console.log('desde login')
      // console.log(requestUrl);
      // console.log(user);
   const response = await axios.post(requestUrl, user);
      if (response.statusText!=="OK") {
        throw new Error('Error saving user');
      }
      // console.log('desde api');
      // console.log (response);
      return response.data; 
     
  }
  catch(error){
      console.error(error.response);
      throw error;
  }
 }
 

export async function updateHistory(history){
    try {   
        const requestUrl=apiUrl+'history/'+history._id;
        //console.log(history);
      //  console.log(requestUrl);
        const response=await axios.put(requestUrl, history);
        //console.log(requestUrl);
        //console.log(response); 
        if (response.statusText!=="OK") {
           throw new Error('Error updating history');
           //return {state:'errored',message:'Error saving patient'};
        }
    
         return response; 
        }
        catch(error){
           console.log(error);
            throw error;
    
        }
    
    }

export async function getHistoryId(patient){
    try {
      
      let requestUrl=apiUrl+'history/'+patient.id;  
    //   console.log('desde api');
    //   console.log(patient);
    //   console.log(requestUrl); 
      const response=await axios.get(requestUrl);
      //console.log(response);
      if (response.statusText!=="OK") {
        throw new Error('Error fetching patient');
        //return {state:'errored',message:'Error saving patient'};
     }
    //  console.log(requestUrl);
    //  console.log(response.data.results);
     return response.data.results[0];
    }  catch(error){
       console.log(error);
       throw error;
    }
}


export async function getPatientId(patient){
    try {
      
      let requestUrl=apiUrl+'patients?_id='+patient.id;  
    //   console.log('desde getPatientId');
    //   console.log(patient);
    //   console.log(requestUrl); 
      const response=await axios.get(requestUrl);

      if (response.statusText!=="OK") {
        throw new Error('Error fetching patient');
        //return {state:'errored',message:'Error saving patient'};
     }
    //  console.log(requestUrl);
    //  console.log(response.data.results);
     return response.data.results[0];
    }  catch(error){
       console.log(error);
       throw error;
    }
}



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
      }
    
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

export async function updatePatient(patient){
    try {   
        const requestUrl=apiUrl+'patients/'+patient._id;
      //  console.log(patient);
      //  console.log(requestUrl);
        const response=await axios.put(requestUrl, patient);
        //console.log(requestUrl);
        //console.log(response); 
        if (response.statusText!=="OK") {
           throw new Error('Error updating patient');
           //return {state:'errored',message:'Error saving patient'};
        }
    
         return response; 
        }
        catch(error){
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
        //console.log(history);
        const response=await axios.post(requestUrl, history);
        // console.log('desde saveHistory');
        // console.log(history);
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
    


