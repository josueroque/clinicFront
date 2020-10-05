import React, { Fragment, useState,useContext,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid,Button,FormControl,TextField,FormLabel,Typography,
        RadioGroup,Radio,InputLabel,Select,MenuItem, ButtonGroup } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import SideBar from './SideBar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MuiAlert from '@material-ui/lab/Alert';
import {PatientsContext} from '../context/PatientsContext';
import Loader from './Loader';
import TabPanel from './TabPanel';
import{Link} from 'react-router-dom';
import requireAuth from './requireAuth'; 

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

  function History(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [buttonLabel,updateBottonLabel]=useState('Save');
  const [updating,updateUpdating]=useState(false);
  const [name,updateName]=useState('');
  const [patient,updatePatient]=useState({});
  const [_id,update_Id]=useState(null);
  const [idNumber,updateIdNumber]=useState("08011988411578");
  const [familyTcb,updateFamilyTcb]=useState(false);
  const [familyDiabetes,updateFamilyDiabetes]=useState(false);
  const [familyHypertension,updateFamilyHypertension]=useState(false);
  const [familyPreeclampsia,updateFamilyPreeclampsia]=useState(false);
  const [familyEeclampssia,updateFamilyEeclampsia]=useState(false);
  const [personalTcb,updatePersonalTcb]=useState(false);
  const [personalDiabetes,updatePersonalDiabetes]=useState(false);
  const [personalHypertension,updatePersonalHypertension]=useState(false);
  const [personalPreeclampsia,updatePersonalPreeclampsia]=useState(false);
  const [personalEeclampssia,updatePersonalEeclampsia]=useState(false);
  const [surgery,updateSurgery]=useState(false);
  const [infertility,updateInfertility]=useState(false);
  const [heartDicease,updateHeartDicease]=useState(false);
  const [kidneyDicease,updateKidneyDicease]=useState(false);
  const [violence,updateViolence]=useState(false);
//Obstetrics
  const[previousGestation,updatePreviousGestation]=useState();
  const[abortions,updateAbortions]=useState();
  const[spontaneousConsecutive,updateSpontaneousConsecutive]=useState(false);
  const[deliveries,updateDeliveries]=useState();
  const[vaginal,updateVaginal]=useState();
  const[cesareans,updateCesareans]=useState();
  const[bornAlive,updateBornAlive]=useState();
  const[bornDead,updateBornDead]=useState();
  const[deadFirstWeek,updateDeadFirstWeek]=useState();
  const[deadAfterFirstWeek,updateDeadAfterFirstWeek]=useState();
  const[stillAlive,updateStillAlive]=useState();
  const[previousWeight,updatePreviousWeight]=useState();
  const[twinsHistory,updateTwinsHistory]=useState();
  //Previous pregnancy
  const [endDate,updateEndDate]= useState(null);
  const [terminationCondition,updateTerminationCondition]=useState('');
  const [plannedPregnancy,updatePlannedPregnancy]=useState(null);
  const [contraceptiveMethod,updateContraceptiveMethod]=useState('none');
  //state
  const [loading,updateLoading]=useState(false);
  const [errorStatus,updateErrorStatus]=useState(false);
  const [savedStatus,updateSavedStatus]=useState(false);

  const{saveHistoryFunction,getHistoryIdFunction,getPatientIdFunction,updateHistoryFunction}=useContext(PatientsContext);

  useEffect(()=>{
    if (props.match.params.id){
     //console.log((props.match.params.id));
      updateUpdating(true);
      update_Id(props.match.params.id);
      updateBottonLabel('Update');
      fetchPatient(props.match.params.id);

      console.log('id');
      console.log(props.match.params.id);
      //updatePatient( fetchPatient(props.match.params.id));  

    }
    else{
      props.history.push('/search');
    }
  
  },[])
  
  useEffect(()=>{
   console.log('patient:'); 
   console.log(patient);
    if(patient._id){
    console.log('paso');
     update_Id(patient._id); 
     updateIdNumber(patient.idNumber);
     updateFamilyTcb(patient.familyTcb);
     updateFamilyDiabetes(patient.familyDiabetes);
     updateFamilyHypertension(patient.familyHypertension);
     updateFamilyPreeclampsia(patient.familyPreeclampsia);
     updateFamilyEeclampsia(patient.familyEeclampssia);
     updatePersonalTcb(patient.personalTcb);
     updatePersonalDiabetes(patient.personalDiabetes);
     updatePersonalHypertension(patient.personalHypertension);
     updatePersonalPreeclampsia(patient.personalPreeclampsia);
     updatePersonalEeclampsia(patient.personalEeclampssia);
     updateSurgery(patient.surgery);
     updateInfertility(patient.infertility);
     updateHeartDicease(patient.heartDicease);
     updateKidneyDicease(patient.kidneyDicease);
     updateViolence(patient.violence);
     updatePreviousGestation(patient.previousGestation);
     updateAbortions(patient.abortions);
     updateSpontaneousConsecutive(patient.spontaneousConsecutive);
     updateDeliveries(patient.deliveries);
     updateVaginal(patient.vaginal);
     updateCesareans(patient.cesareans);
     updateBornAlive(patient.bornAlive);
     updateBornDead(patient.bornDead);
     updateDeadFirstWeek(patient.deadAfterFirstWeek);
     updateDeadAfterFirstWeek(patient.deadAfterFirstWeek);
     updateStillAlive(patient.stillAlive);
     updatePreviousWeight(patient.previousWeight);
     updateTwinsHistory(patient.twinsHistory);
     updateEndDate(patient.endDate);
     updateTerminationCondition(patient.terminationCondition);
     updatePlannedPregnancy(patient.plannedPregnancy);
     updateContraceptiveMethod(patient.contraceptiveMethod);
     updateUpdating(true);
     updateBottonLabel('Update');
    }
    else{
      console.log('paso2');
      updateUpdating(false);
      update_Id(props.match.params.id);
      updateBottonLabel('Save');
     // console.log('done!');
    }
    
  },[patient])
  
  const fetchPatient=async(_idFetch)=>{
    console.log('llegue a fetch');
    let fetchedPatient=await getHistoryIdFunction({_id:_idFetch});
    let patientGeneral= await getPatientIdFunction({id:_idFetch});
    updateName(patientGeneral.name+' '+patientGeneral.lastName )  
    updateIdNumber(patientGeneral.idNumber);
    console.log('desde fetch');
    console.log(_idFetch);
    console.log(fetchedPatient);
    console.log(patientGeneral);
    if (fetchedPatient){
    updatePatient(fetchedPatient);
    }
    return ;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   
  const save=async(history)=>{
    try{
        updateLoading(true);
        updateErrorStatus(true);
        updateSavedStatus(false);
        await wait(1000);
        updateLoading(false);
        updateSavedStatus(true);
      //  console.log(history);
        let response;
        if(updating!==true){
          console.log('save');
          console.log(history);
          history._id=_id;
          response =await saveHistoryFunction(history);
       }
       else{
         console.log('update');
        
          history._id=_id;
        console.log(history);
          response = await updateHistoryFunction(history);
       }

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


  return (
    <Fragment>
    <SideBar></SideBar>
    {/* <h1 className="HistoryTitle"> History </h1> */}
    <h1  className="HistoryTitle"> 
         {'History '+name}
    </h1>
      <div className="CenteredDiv">
        <FormControl className={classes.formControl}>   
        { savedStatus===true?
          <Alert position="center" severity={errorStatus===true?'error':'success'}>{errorStatus===true ? 'An error occured, please check your data':'History saved succefully!                                             '}</Alert>
          :''  
        }
        </FormControl>
      </div>      
    <Container className="Container-History">
    <div className={classes.root}>
    {loading===true?<Loader></Loader>:   
    <form className={classes.root} noValidate autoComplete="off"
      onSubmit={ e=>{
        e.preventDefault();
 
        console.log(familyTcb);
        const history={
          idNumber,
          familyTcb,
          familyDiabetes,
          familyHypertension,
          familyPreeclampsia,
          familyEeclampssia,
          personalTcb,
          personalDiabetes,
          personalHypertension,
          personalPreeclampsia,
          personalEeclampssia,
          surgery,
          infertility,
          heartDicease,
          kidneyDicease,
          violence,
          previousGestation,
          abortions,
          spontaneousConsecutive,
          deliveries,
          vaginal,
          cesareans,
          bornAlive,
          bornDead,
          deadFirstWeek,
          deadAfterFirstWeek,
          stillAlive,
          previousWeight,
          twinsHistory,
          endDate,
          terminationCondition,
          plannedPregnancy,
          contraceptiveMethod
        }

        save (history);
        
      }

      }
    >

      <AppBar className="AppBar" position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Personal Family" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Obstetrics" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="Previous Pregnancy" icon={<PersonPinIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container className="ContainerHistory">
          <Container>
            <h3>Family</h3>
                <FormGroup >
                  <FormControlLabel
                    key="familyTCB"
                    control={<Checkbox checked ={familyTcb}  onChange={e=>{updateFamilyTcb(e.target.checked)}} />}
                    label="TBC"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={familyDiabetes}  onChange={e=>{updateFamilyDiabetes(e.target.checked)}}  />}
                    label="Diabetes"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox  checked={familyHypertension} onChange={e=>{updateFamilyHypertension(e.target.checked)}}  />}
                    label="Hypertension"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox  checked={familyPreeclampsia} onChange={e=>{updateFamilyPreeclampsia(e.target.checked)}}  />}
                    label="Preeclampsia"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={familyEeclampssia} onChange={e=>{updateFamilyEeclampsia(e.target.checked)}}  />}
                    label="Eeclampsia"
                    labelPlacement="start"
                  />                                                                        
                </FormGroup>
          </Container>
          <Container>
            <h3>Personal</h3>
                <FormGroup >
                  <FormControlLabel
                    control={<Checkbox checked={personalTcb} onChange={e=>{updatePersonalTcb(e.target.checked)}}  />}
                    label="TBC"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={personalDiabetes} onChange={e=>{updatePersonalDiabetes(e.target.checked)}} />}
                    label="Diabetes"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={personalHypertension} onChange={e=>{updatePersonalHypertension(e.target.checked)}}   />}
                    label="Hypertension"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox  checked={personalPreeclampsia} onChange={e=>{updatePersonalPreeclampsia(e.target.checked)}}  />}
                    label="Preeclampsia"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={personalEeclampssia} onChange={e=>{updatePersonalEeclampsia(e.target.checked)} }  />}
                    label="Eeclampsia"
                    labelPlacement="start"
                  /> 
                 </FormGroup> 
                 </Container>
                <Container> 
                <br></br> 
                <FormGroup >
                  <FormControlLabel
                    control={<Checkbox   checked={surgery} onChange={e=>{updateSurgery(e.target.checked)}} />}
                    label="Surgery"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox checked={infertility} onChange={e=>{updateInfertility(e.target.checked)}}  />}
                    label="Infertility"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox checked={heartDicease} onChange={e=>{updateHeartDicease(e.target.checked)}}   />}
                    label="Heart disease"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox checked={kidneyDicease} onChange={e=>{updateKidneyDicease(e.target.checked)}}   />}
                    label="Kidney disease"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox checked={violence} onChange={e=>{updateViolence(e.target.checked)}}   />}
                    label="Violence"
                    labelPlacement="start"
                  />
                 </FormGroup>                                                                                           
                
          </Container>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container className="Obstetrics">
              <FormGroup className="Form">
                  <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                         label="Previous Gestations"
                         variant="outlined"
                         size="small"
                         value={previousGestation}
                         onChange={e=>{updatePreviousGestation(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="abortions"
                         variant="outlined"
                         size="small"
                         value={abortions}
                        onChange={e=>{updateAbortions(e.target.value)}}
                      />
                </FormControl> 
                <FormControlLabel
                    control={<Checkbox checked={spontaneousConsecutive} onChange={e=>{updateSpontaneousConsecutive(e.target.checked)}}  />}
                    label="3 Spontaneous Consecutive"
                    labelPlacement="start"
                    className="CenteredCheck"
                  /> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                         label="Deliveries"
                         variant="outlined"
                         size="small"
                         value={deliveries}
                        onChange={e=>{updateDeliveries(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        //id="idNumber"
                         label="Last Previous Weight(g)"
                         variant="outlined"
                         size="small"
                         value={previousWeight}
                         onChange={e=>{updatePreviousWeight (e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="Vaginal Deliveries"
                        variant="outlined"
                        size="small"
                        value={vaginal}
                        onChange={e=>{updateVaginal(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                         label="Cesareans"
                         variant="outlined"
                         size="small"
                         value={cesareans}
                         onChange={e=>{updateCesareans(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="Born Dead"
                        variant="outlined"
                        size="small"
                        value={bornDead}
                        onChange={e=>{updateBornDead(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="Dead First Week"
                        variant="outlined"
                        size="small"
                        value={deadFirstWeek}
                        onChange={e=>{updateDeadFirstWeek(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="Dead After First Week"
                        variant="outlined"
                        size="small"
                        value={deadAfterFirstWeek}
                        onChange={e=>{updateDeadAfterFirstWeek(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="Born Alive"
                        variant="outlined"
                        size="small"
                        value={bornAlive}
                        onChange={e=>{updateBornDead(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="Id Number"
                        variant="outlined"
                        size="small"
                        value={stillAlive}
                        onChange={e=>{updateStillAlive(e.target.value)}}
                      />
                </FormControl> 
                <FormControl className={classes.formControl}> 
                      <TextField 
                        type="number" 
                        className="FormNumber"
                        // id="idNumber"
                        label="Twins History"
                        variant="outlined"
                        size="small"
                        value={twinsHistory}
                        onChange={e=>{updateTwinsHistory(e.target.value)}}
                      />
                </FormControl> 

              </FormGroup>  
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container className="Container-History">
          <FormGroup className="Form">
              <FormControl className={classes.formControl}> 
                <FormLabel className="RadioLabel" component="legend">Termination Condition</FormLabel>
                <RadioGroup 
                  className="RadioCondition"
                  aria-label="socialSec" 
                  name="socialSec"
                 value={terminationCondition}
                  onChange={e=>{updateTerminationCondition(e.target.value)}}
                >
                  <FormControlLabel   control={<Radio value = "normal" />} label="Normal" />
                  <FormControlLabel  control={<Radio value = "cesarean" />} label="Cesarean" />
                  <FormControlLabel  control={<Radio value = "abortion" />} label="Abortion" />

                </RadioGroup>
              </FormControl> 
                  <FormControl className={classes.formControl}> 
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="left">
                          <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Previous Pregnancy End Date"
                            format="MM/dd/yyyy"
                            value={endDate}
                            onChange={updateEndDate}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                        />
                        </Grid>
                  </MuiPickersUtilsProvider>
                </FormControl>
                <FormControl className={classes.formControl}> 
                <FormLabel className="RadioLabel" component="legend">Planned Pregnancy?</FormLabel>
                <RadioGroup 
                  className="RadioCondition"
                  aria-label="socialSec" 
                  name="plannedPregnancy"
                  value={plannedPregnancy}
                  onChange={e=>{updatePlannedPregnancy(e.target.value)}}
                >
                  <FormControlLabel   control={<Radio value = {true} />} label="Yes" />
                  <FormControlLabel  control={<Radio value = {false} />} label="No" />

                </RadioGroup>
              </FormControl> 
              <FormControl className={classes.formControl}> 
                  <InputLabel id="demo-simple-select-label">Contraceptive Method </InputLabel>
                  <Select  name="contraceptiveMethod" value={contraceptiveMethod}  onChange={e=>{updateContraceptiveMethod(e.target.value)}}  > 
                  {/*  */}
                        <MenuItem value="none" >None</MenuItem>
                        <MenuItem value="barrier">Barrier</MenuItem>
                        <MenuItem value="diu">DIU</MenuItem>
                        <MenuItem value="hormonal" >Hormonal</MenuItem>
                        <MenuItem value="emergency">Emergency</MenuItem>
                        <MenuItem value="natural">natural</MenuItem>
                  </Select>
              </FormControl> 
              
            </FormGroup>
        </Container>
        
      </TabPanel>
        <Grid container justify="center">
            
            <ButtonGroup>
            <Link to={{pathname:`/general/`+_id}} className="Link" >
              <Button  className="HistoryButton" type="submit" variant="contained" color="primary">       History                          </Button>
            </Link>
              <Button className="HistoryButton" type="submit" variant="contained" color="primary">    {buttonLabel}   </Button>
              <Button className="HistoryButton" type="submit" variant="contained" color="primary">    Actual Gestation   </Button>
            </ButtonGroup>                
        </Grid>
    </form>
    } 
    </div>
    </Container>


    </Fragment>
  );
}
//export default requireAuth( History);
export default  History;