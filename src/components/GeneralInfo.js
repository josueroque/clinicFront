import React,{useContext,useState, Fragment} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormGroup,FormControl,RadioGroup,FormControlLabel,Button,
        Radio,FormLabel,Select,MenuItem,InputLabel,Grid } from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DateFnsUtils from '@date-io/date-fns';  
import SideBar from './SideBar';       
import {PatientsContext} from '../context/PatientsContext';
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

const classes = useStyles();
const [patient,updatePatient]=useState({});
const [idNumber,updateIdNumber]=useState('');
const [name,updateName]=useState('');
const [lastName,updateLastname]=useState('');
const [socialInsurance,updateSocialInsurance]=useState(false);
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
 
const save=async(patient)=>{
   try{
    updateLoading(true);
    updateErrorStatus(true);
    updateSavedStatus(false);
    await wait(1000);
    updateLoading(false);
    updateSavedStatus(true);
    let response = await savePatientFunction(patient);
    //console.log('desde save' + response);
    if (response.statusText==="OK") {
      updateErrorStatus(false);
    }
    await wait(1000);

    // console.log( errorStatus);
    // console.log( savedStatus);
    // console.log( loading);
  }
    catch(error){
     // console.log(response);
      updateSavedStatus(true);
      updateErrorStatus(true);

      // console.log( errorStatus);
      // console.log( savedStatus);
      // console.log( loading);
  }
}


const wait=async(ms)=> {
  return new Promise(resolve => {
  setTimeout(resolve, ms);
  });
}
return(
  <Fragment>
    <SideBar></SideBar>
    <h1> General Information </h1>
 
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
      
      <FormGroup className="Form">
      <FormControl className={classes.formControl}>   
      { savedStatus===true?
        <Alert severity={errorStatus===true?'error':'success'}>{errorStatus===true ? 'An error occured, please check your data':'Advert saved succefully!'}</Alert>
        :''  
      }
      </FormControl>
        <FormControl className={classes.formControl}> 
            <TextField 
              type="number" 
              className="FormText"
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
              className="FormText"
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
            className="FormText"
            id="lastName" 
            label="Last Name"
            variant="outlined" 
            size="small"
            value={lastName}
            onChange={e=>updateLastname(e.target.value)}
          />
        </FormControl> 
        <FormControl className={classes.formControl}> 
            <FormLabel className="RadioLabel" component="legend">Social Security?</FormLabel>
            <RadioGroup 
              className="RadioSocialSec"
              aria-label="socialSec" 
              name="socialSec"
              value={socialInsurance}
              onChange={e=>{updateSocialInsurance(e.target.value)}}
            >
              <FormControlLabel  value = "true" control={<Radio />} label="Yes" />
              <FormControlLabel value = "false" control={<Radio />} label="No" />
            </RadioGroup>
         </FormControl> 
         <FormControl className={classes.formControl}> 
          <TextField 
            className="FormText" 
            id="address" 
            label="Address" 
            variant="outlined" 
            size="small"
            multiline rows="1"
            value={address}
            onChange={e=>{updateAddress(e.target.value)}}
            />
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <InputLabel id="demo-simple-select-label">Municipality</InputLabel>
          <Select  name="city" required value={city} onChange={e=>{updateCity(e.target.value)}}  >
                <MenuItem className="column" key="default" value="default" >---Select municipality---</MenuItem>
                <MenuItem key="San Pedro Sula" value="San Pedro Sula">San Pedro Sula</MenuItem>
                <MenuItem key="Tegucigalpa" value="Tegucigalpa">Tegucigalpa</MenuItem>
                </Select>
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <TextField
            className="FormText"
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
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={birthday}
                onChange={updateBirthday}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
             />
            </Grid>
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl className={classes.formControl}> 
          <InputLabel id="maritalStatus">Marutal Status</InputLabel>
          <Select 
            name="maritalStatus" 
            required value={maritalStatus}
            onChange={e=>{updateMaritalStatus(e.target.value)}}
          >
                <MenuItem className="column" key="default" value="default" >---Select option---</MenuItem>
                <MenuItem key="Married" value="none">Married</MenuItem>
                <MenuItem key="Single" value="basic">Single</MenuItem>
                <MenuItem key="Common Law" value="Other">Common Law</MenuItem>
                <MenuItem key="Other" value="Other">Other</MenuItem>

          </Select>
        </FormControl>
        <FormControl className={classes.formControl}> 
          <InputLabel id="demo-simple-select-label">Education Level</InputLabel>
          <Select  name="educationLevel" required value={educationLevel} onChange={e=>{updateEducationLevel(e.target.value)}} >
                <MenuItem className="column" key="default" value="default" >---Select level---</MenuItem>
                <MenuItem key="none" value="none">None</MenuItem>
                <MenuItem key="basic" value="basic">Basic</MenuItem>
                <MenuItem key="high school" value="High School">High School</MenuItem>
                <MenuItem key="Bachelor degree" value="Bachelor degree">Bachelor degree</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}> 
          <TextField 
            className="FormText"
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
            className="FormText"
            id="childBirthPlace"
            label="Child Birth Place"
            variant="outlined"
            size="small"
            value={childBirthPlace}
            onChange={e=>{updateChildBirthPlace(e.target.value)}}    
          />
        </FormControl>           
      </FormGroup>

 
      <Grid container justify="center">
            <Button className="centerButton" type="submit" variant="contained" color="primary">    Save   </Button>
      </Grid>
    </form>
  }
  
  </Fragment>

)

}

export default GeneralInfo;