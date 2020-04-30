import axios from 'axios';
const apiUrl='http://localhost:3001/apiv1/';

export async function savePatient(patient){
try {   
    const requestUrl=apiUrl+'patients';
    const response=await axios.post(requestUrl, patient);
    //const response2=JSON.stringify(response);
//     console.log(patient);
//   //  console.log(requestUrl);
//     console.log(response);
//     console.log(response.statusText);
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




