import axios from 'axios';
const apiUrl='http://localhost:3001/apiv1/';

export async function savePatient(patient){
try {   
    const requestUrl=apiUrl+'patients';
    const response=axios.post(requestUrl, patient);

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




