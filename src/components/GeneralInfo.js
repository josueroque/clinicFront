import React,{useContext,useState, Fragment, useEffect} from 'react';
import{Link} from 'react-router-dom';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormGroup,FormControl,RadioGroup,FormControlLabel,Button,
        Radio,FormLabel,Select,MenuItem,InputLabel,Grid, ButtonGroup, Container } from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DateFnsUtils from '@date-io/date-fns';  
import SideBar from './SideBar';
import requireAuth from './requireAuth';       
import {PatientsContext} from '../context/PatientsContext';
import {UsersContext} from '../context/UsersContext'; 
import Loader from './Loader';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    '& > * + *': {
      marginTop: theme.spacing(2), 
    },
  },
}));

const GeneralInfo=(props)=>{
const {auth}=useContext(UsersContext);
const classes = useStyles();
const [updating,updateUpdating]=useState(false);
const [patient,updatePatient]=useState({});
const [buttonLabel,updateBottonLabel]=useState('Save');
const [_id,update_Id]=useState(null);
const [idNumber,updateIdNumber]=useState('');
const [name,updateName]=useState('');
const [lastName,updateLastName]=useState('');
const [socialInsurance,updateSocialInsurance]=useState("false");
const [address,updateAddress]=useState('');
const [city,updateCity]=useState('');
const [phone,updatePhone]=useState('');
const [birthday,updateBirthday]= React.useState(new Date('2000-01-18'));
const [educationLevel,updateEducationLevel]=useState('');
const [maritalStatus,updateMaritalStatus]=useState('');
const [controlPlace,updateControlPlace]=useState('');
const [childBirthPlace,updateChildBirthPlace]=useState('');
const [loading,updateLoading]=useState(false);
const [errorStatus,updateErrorStatus]=useState(false);
const [savedStatus,updateSavedStatus]=useState(false);

const{savePatientFunction}=useContext(PatientsContext);
const{updatePatientFunction}=useContext(PatientsContext); 
const{getPatientIdFunction}=useContext(PatientsContext);

useEffect(()=>{
  if (props.match.params.id){
    updateUpdating(true);
    update_Id(props.match.params.id);
    updateBottonLabel('Update');
    fetchPatient(props.match.params.id);  
    console.log('props'); 
    console.log(props);     
  }
  else{
    updateUpdating(false);
    updateBottonLabel('Save');
  }

},[])

useEffect(()=>{
  
  if(patient){
 //   console.log(patient);
     updateName(patient.name);
     updateLastName(patient.lastName);
     updateIdNumber(patient.idNumber);
     console.log(patient);
     console.log(patient.socialInsurance);
     patient.socialInsurance===true?updateSocialInsurance("true"):updateSocialInsurance("false");
    // updateSocialInsurance(patient.socialInsurance);
     updateAddress(patient.address);
     updateCity(patient.city);
     updatePhone(patient.phone);
     updateBirthday(patient.birthday);
     updateMaritalStatus(patient.maritalStatus);
     updateEducationLevel(patient.educationLevel);
     updateControlPlace(patient.controlPlace);
     updateChildBirthPlace(patient.childBirthPlace);
  }
  
},[patient])

const updateSocialInsuranceFunction=function(event){
  console.log(socialInsurance);
  updateSocialInsurance(event.target.value);
}

const fetchPatient=async(_id)=>{
  let fetchedPatient=await getPatientIdFunction({id:_id});
  //console.log(fetchedPatient);
  updatePatient(fetchedPatient);
  return ;
};



const save=async(patient)=>{
   try{
    console.log(updating); 
    updateLoading(true);
    updateErrorStatus(true);
    updateSavedStatus(false);
    await wait(1000);
    updateLoading(false);
    updateSavedStatus(true);
    let response;
     // console.log(patient);
      if(!updating){

         response = await savePatientFunction(patient);
      }
      else{
        patient._id=_id;
         response = await updatePatientFunction(patient);
      }
    //console.log('desde save' + response);
    if (response.statusText==="OK") {
      updateErrorStatus(false);
    }
    await wait(1000);

  }
    catch(error){
      console.log(error);
      updateSavedStatus(true);
      updateErrorStatus(true);

  }
}


const wait=async(ms)=> {
  return new Promise(resolve => {
  setTimeout(resolve, ms);
  });
}
console.log('desde render');
console.log(socialInsurance);

return(
  <Fragment>
    <SideBar></SideBar>
    <h1> General Information </h1>
    <div>   
      { savedStatus===true?
        <Alert severity={errorStatus===true?'error':'success'}>{errorStatus===true ? 'An error occured, please check your data':'Patient Information has been saved succefully!'}</Alert>
        :''  
      }
    </div>
    {loading===true?<Loader></Loader>: 

    
    <form className={classes.root} noValidate autoComplete="off"
      onSubmit={ e=>{
        e.preventDefault();

        const patient={
            idNumber,
            name,
            lastName,
            socialInsurance,
            address,
            city,
            phone,
            birthday,
            educationLevel,
            maritalStatus,
            controlPlace,
            childBirthPlace
        }
        
        save (patient);
        
      }

      }
    >
      
      <FormGroup className="Form-General">
        <Container>
        <FormControl className={classes.formControl}> 
            <TextField 
              type="text" 
              className="FormTextGeneral"
              id="idNumber"
              label="Id Number"
              variant="outlined"
              size="small"
              value={idNumber}
              onChange={e=>{updateIdNumber(e.target.value)}}
            />
        </FormControl> 
        <FormControl className={classes.formControl}> 
            <TextField
              className="FormTextGeneral"
              id="firtsName"
              label="First Name"
              variant="outlined"
              size="small"
              value={name}
              onChange={e=>{updateName(e.target.value)}}
            />
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <TextField 
            className="FormTextGeneral"
            id="lastName" 
            label="Last Name"
            variant="outlined" 
            size="small"
            value={lastName}
            onChange={e=>updateLastName(e.target.value)}
          />
        </FormControl> 
        <FormControl className={classes.formControl}> 
            <FormLabel className="RadioLabel FormTextGeneral" component="legend">Social Security?</FormLabel>
            {socialInsurance?
              <RadioGroup 
                className="RadioSocialSec FormTextGeneral"
                aria-label="socialSec" 
                name="socialSec"
                value={socialInsurance}
                onChange={updateSocialInsuranceFunction}
              >
                
                <FormControlLabel  value = "true" control={<Radio />} label="Yes" />
                <FormControlLabel value = "false"  control={<Radio  />} label="No" />
            
              </RadioGroup>
            :''}
         </FormControl> 
         <FormControl className={classes.formControl}> 
          <TextField 
            className="FormTextGeneral" 
            id="address" 
            label="Address" 
            variant="outlined" 
            size="small"
            multiline rows="1"
            value={address}
            onChange={e=>{updateAddress(e.target.value)}}
            />
        </FormControl> 
        <FormControl className={classes.formControl,"ListInfo"}> 
          <InputLabel id="demo-simple-select-label" className="ListLabel">Municipality</InputLabel>
          <Select  name="city" required value={city} onChange={e=>{updateCity(e.target.value)}} className="FormTextGeneral" >
                <MenuItem className="column" key="default" value="default" >---Select municipality---</MenuItem>
                <MenuItem key="San Pedro Sula" value="San Pedro Sula">San Pedro Sula</MenuItem>
                <MenuItem key="Tegucigalpa" value="Tegucigalpa">Tegucigalpa</MenuItem>
                <MenuItem key="Danli" value="Danli">Danli</MenuItem>          
          </Select>
        </FormControl> 
        </Container>
        <Container>
        <FormControl className={classes.formControl}> 
          <TextField
            className="FormTextGeneral"
            id="phoneNumber" 
            label="Phone number"
            variant="outlined"
            size="small"
            value={phone}
            onChange={e=>{updatePhone(e.target.value)}}
            />
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="left">
              <KeyboardDatePicker 
                className="FormTextGeneral"
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="dd/MM/yyyy"
                value={birthday}
                onChange={updateBirthday}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
             />
            </Grid>
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl className={classes.formControl,"ListInfo"}> 
          <InputLabel id="demo-simple-select-label" className="ListLabel">Marital Status</InputLabel>
          <Select 
            name="maritalStatus" 
            required value={maritalStatus}
            onChange={e=>{updateMaritalStatus(e.target.value)}}
             className="FormTextGeneral"
            
          >
                <MenuItem className="column" key="default" value="default" >---Select option---</MenuItem>
                <MenuItem key="Married" value="none">Married</MenuItem>
                <MenuItem key="Single" value="basic">Single</MenuItem>
                <MenuItem key="Common Law" value="Other">Common Law</MenuItem>
                <MenuItem key="Other" value="Other">Other</MenuItem>

          </Select>
        </FormControl>
        <FormControl className={classes.formControl,"ListInfo"}> 
          <InputLabel id="demo-simple-select-label" className="ListLabel" >Education Level</InputLabel>
          <Select className="FormTextGeneral" name="educationLevel" required value={educationLevel} onChange={e=>{updateEducationLevel(e.target.value)}} className="FormTextGeneral">
                <MenuItem className="column" key="default" value="default" >---Select level---</MenuItem>
                <MenuItem key="none" value="none">None</MenuItem>
                <MenuItem key="basic" value="basic">Basic</MenuItem>
                <MenuItem key="high school" value="High School">High School</MenuItem>
                <MenuItem key="Bachelor degree" value="Bachelor degree">Bachelor degree</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}> 
          <TextField 
            className="FormTextGeneral"
            id="controlPlace"
            label="Control Place"
            variant="outlined"
            size="small"
            value={controlPlace}
            onChange={e=>{updateControlPlace(e.target.value)}}    
          />
        </FormControl>           
        <FormControl className={classes.formControl}> 
          <TextField 
            className="FormTextGeneral"
            id="childBirthPlace"
            label="Child Birth Place"
            variant="outlined"
            size="small"
            value={childBirthPlace}
            onChange={e=>{updateChildBirthPlace(e.target.value)}}    
          />
        </FormControl>
        <FormControl className={classes.formControl}> 
          <TextField 
            className="FormTextGeneral"
            id="clinicalProfile"
            label="Clinical Profile"
            variant="outlined"
            size="small"
            value={childBirthPlace}
            onChange={e=>{updateChildBirthPlace(e.target.value)}}    
          />
        </FormControl>
        </Container>           
      </FormGroup>

 
      <Grid container justify="center">
        <ButtonGroup>
            <Button className="centerButton" type="submit" variant="contained" color="primary">    {buttonLabel}  </Button>
            <Link to={{pathname:`/history/`+patient._id}} className="Link HistoryButton" >
              <Button  className="centerButton HistoryButton" type="submit" variant="contained" color="primary">       History                          </Button>
            </Link> 
        </ButtonGroup>       
      </Grid>
    </form>
  }
  
  </Fragment>

)

}

//export default requireAuth( GeneralInfo);
export default  GeneralInfo;