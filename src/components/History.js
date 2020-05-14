import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container,Grid,Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SideBar from './SideBar';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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

export default function History() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  
  
  return (
    <Fragment>
    <SideBar></SideBar>
    <Container className="Container-Home">
    <div className={classes.root}>
     
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
                    control={<Checkbox value={familyTcb} onChange={e=>{updateFamilyTcb(e.target.value)}} />}
                    label="TBC"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox value={familyDiabetes}  onChange={e=>{updateFamilyDiabetes(e.target.value)}}  />}
                    label="Diabetes"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox  value={familyHypertension} onChange={e=>{updateFamilyHypertension(e.target.value)}}  />}
                    label="Hypertension"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox  value={familyPreeclampsia} onChange={e=>{updateFamilyPreeclampsia(e.target.value)}}  />}
                    label="Preeclampsia"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox value={familyEeclampssia} onChange={e=>{updateFamilyEeclampsia(e.target.value)}}  />}
                    label="Eeclampsia"
                    labelPlacement="start"
                  />                                                                        
                </FormGroup>
          </Container>
          <Container>
            <h3>Personal</h3>
                <FormGroup >
                  <FormControlLabel
                    control={<Checkbox value={personalTcb} onChange={e=>{updatePersonalTcb(e.target.value)}}  />}
                    label="TBC"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox value={personalDiabetes} onChange={e=>{updatePersonalDiabetes(e.target.value)}} />}
                    label="Diabetes"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox value={personalHypertension} onChange={e=>{updatePersonalHypertension(e.target.value)}}   />}
                    label="Hypertension"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox  value={personalPreeclampsia} onChange={e=>{updatePersonalPreeclampsia(e.target.value)}}  />}
                    label="Preeclampsia"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    control={<Checkbox value={personalEeclampssia} onChange={e=>{updatePersonalEeclampsia(e.target.value)} }  />}
                    label="Eeclampsia"
                    labelPlacement="start"
                  /> 
                 </FormGroup> 
                 </Container>
                <Container> 
                <br></br> 
                <FormGroup >
                  <FormControlLabel
                    control={<Checkbox   value={surgery} onChange={e=>{updateSurgery(e.target.value)}} />}
                    label="Surgery"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox value={infertility} onChange={e=>{updateInfertility(e.target.value)}}  />}
                    label="Infertility"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox value={heartDicease} onChange={e=>{updateHeartDicease(e.target.value)}}   />}
                    label="Heart disease"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox value={kidneyDicease} onChange={e=>{updateKidneyDicease(e.target.value)}}   />}
                    label="Kidney disease"
                    labelPlacement="start"
                  /> 
                  <FormControlLabel
                    control={<Checkbox value={violence} onChange={e=>{updateViolence(e.target.value)}}   />}
                    label="Violence"
                    labelPlacement="start"
                  />
                 </FormGroup>                                                                                           
                
          </Container>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
    </Container>

    <Grid container justify="center">
            <Button className="" type="submit" variant="contained" color="primary">    Save   </Button>
    </Grid>
    </Fragment>
  );
}