import React,{useContext,useState, Fragment} from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormGroup,FormControl,RadioGroup,FormControlLabel,Button,
        Radio,FormLabel,Select,MenuItem,InputLabel,Grid } from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';         
import {PatientsContext} from '../context/PatientsContext';
const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    '& > * + *': {
      marginTop: theme.spacing(2), 
    },
  },
}));


const GeneralInfo=()=>{
  const classes = useStyles();
const [patient,updatePatient]=useState({});
const [idNumber,updateIdNumber]=useState('');
const [name,updateName]=useState('');
const [lastname,updateLastname]=useState('');
const [socialInsurance,updateSocialInsurance]=useState('');
const [address,updateAddress]=useState('');
const [city,updateCity]=useState('');
const [phone,updatePhone]=useState('');
const [birthday,updateBirthday]=useState('');
const [educationLevel,updateEducationLevel]=useState('');
const [maritalStatus,updateMaritalStatus]=useState('');
const [controlPlacle,updateControlPlace]=useState('');
const [childBirthPlace,updateChildBirthPlace]=useState('');
const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

const handleDateChange = (date) => {
  setSelectedDate(date);
};

return(
  <Fragment>
    <h1> General Information </h1>
    <form className={classes.root} noValidate autoComplete="off">
      <FormGroup className="Form">
        <FormControl className={classes.formControl}> 
          <TextField id="outlined-basic" label="Id Number" variant="outlined" size="small"/>
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <TextField className="FormText" id="outlined-basic" label="name" variant="outlined" size="small" />
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <TextField className="FormText" id="outlined-basic" label="Last Name" variant="outlined" size="small"/>
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <FormLabel className="RadioLabel" component="legend">Social Security?</FormLabel>
          <RadioGroup className="RadioSocialSec" aria-label="socialSec" name="socialSec"  >
            <FormControlLabel  value = "Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value = "No" control={<Radio />} label="No" />
          </RadioGroup>
         </FormControl> 
         <FormControl className={classes.formControl}> 
          <TextField className="FormText" id="outlined-basic" label="Address" variant="outlined" size="small" multiline rows="2"/>
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <InputLabel id="demo-simple-select-label">Municipality</InputLabel>
          <Select  name="city" required  >
                <MenuItem className="column" key="default" value="default" >---Select municipality---</MenuItem>
                <MenuItem key="San Pedro Sula" value="San Pedro Sula">San Pedro Sula</MenuItem>
                <MenuItem key="Tegucigalpa" value="Tegucigalpa">Tegucigalpa</MenuItem>
                </Select>
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <TextField className="FormText" id="outlined-basic" label="Phone number" variant="outlined" size="small"/>
        </FormControl> 
        <FormControl className={classes.formControl}> 
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="left">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Birthday"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
            />
            </Grid>
          </MuiPickersUtilsProvider>
        </FormControl>
        <FormControl className={classes.formControl}> 
          <InputLabel id="demo-simple-select-label">Education Level</InputLabel>
          <Select  name="educationLevel" required  >
                <MenuItem className="column" key="default" value="default" >---Select level---</MenuItem>
                <MenuItem key="none" value="none">None</MenuItem>
                <MenuItem key="basic" value="basic">Basic</MenuItem>
                <MenuItem key="Tegucigalpa" value="Tegucigalpa">High School</MenuItem>
                <MenuItem key="Tegucigalpa" value="Tegucigalpa">Bachelor degree</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}> 
          <TextField className="FormText" id="outlined-basic" label="Control Place" variant="outlined" size="small"/>
        </FormControl>           
        <FormControl className={classes.formControl}> 
          <TextField className="FormText" id="outlined-basic" label="Child Birth Place" variant="outlined" size="small"/>
        </FormControl>           
      </FormGroup>   
      <Grid container justify="center">
            <Button className="centerButton" type="submit" variant="contained" color="primary">    Save   </Button>
      </Grid>
    </form>
  </Fragment>

)


}

export default GeneralInfo;