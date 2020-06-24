import React, { Fragment,useEffect,useState,useContext } from 'react';
//import {useDispatch,useSelector} from 'react-redux';
import SideBar from './SideBar';
import { Button,Container, FormGroup,Grid, Link, TableHead } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import {PatientsContext} from '../context/PatientsContext';
import requireAuth from './requireAuth';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2), 
      },
    },
  }));

const useStyles1 = makeStyles(theme => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  
  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = event => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = event => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = event => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = event => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  
  const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
    },
  });

  const useStyles3 = makeStyles(theme => ({
    root: {
      width: '70%',
      '& > * + *': {
        marginTop: theme.spacing(2), 
      },
    },
  }));

function Search(props){

   const [patients,updatePatients]=useState([]);
   const [name ,updateName ]=useState(null);
   const [idNumber,updateIdNumber]=useState(null);
   const [lastName,updateLastName]=useState(null);
   const{getPatientsFunction}=useContext(PatientsContext);
   //table
   const classes2 = useStyles2();
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(5);
   const emptyRows = rowsPerPage - Math.min(rowsPerPage, patients.length - page * rowsPerPage);

   useEffect(()=>{
      
      const fetchPatients=async(filter)=>{
       const allPatients= await getPatientsFunction(filter);
     //   console.log(allPatients);
       updatePatients(allPatients);
        return allPatients ;
      }
       fetchPatients();
     // console.log(patientsArray);
    },[])
 
    const getPatients=async(filter)=>{
      const allPatients= await getPatientsFunction(filter);
      updatePatients(allPatients);
      return allPatients ;
     }
    

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
 

    const classes3 = useStyles3();

    const changeName=(event)=>{
      updateName(event.target.value);
    }

    const changeIdNumber=(event)=>{
      updateIdNumber(event.target.value);
    }

   // console.log(patients);
    return(

       <Fragment>
        <SideBar></SideBar> 
        <Container className="Container-Search">
        <FormGroup className="Form">
        <h1>Search</h1>    
         <form
                    onSubmit={e=> {
                        e.preventDefault();
                        let filter={};
                        if (name){
                            filter={name:name};   
                        }
                         if(idNumber){
                            filter={...filter,idNumber:idNumber }
                         }
                         if(lastName){
                            filter={...filter,lastName:lastName }
                         }
                         console.log(filter);
                        getPatients(filter);
 
                       }
                      }  
          >

       
          <FormControl className="SearchText"> 
              <TextField 
                type="text" 
                className="FormText"
                id="name"
                label="First Name"
                variant="outlined"
                size="small"
                value={name}
                onChange={e=>{updateName(e.target.value)}}
              />
              </FormControl>
          <FormControl className="SearchText"> 
              <TextField 
                type="text" 
                className="FormText"
                id="name"
                label="Last Name"
                variant="outlined"
                size="small"
                value={lastName}
                onChange={e=>{updateLastName(e.target.value)}}
              />              
          </FormControl>
            <FormControl className="SearchText"> 
              <TextField 
                type="text" 
                className="FormText"
                id="idNumber"
                label="Id Number"
                variant="outlined"
                size="small"
                value={idNumber}
                onChange={e=>{updateIdNumber(e.target.value)}}
              />
          </FormControl> 
          <Grid container >                 
              <Button className="searchButton" type="submit" variant="contained" color="primary">    Search   </Button>
          </Grid>
         </form>
         </FormGroup>
        </Container>
        <Container className="SearchResults">
          <TableContainer component={Paper}>
            <Table className={classes2.table} aria-label="custom pagination table">
            <TableBody>
                {(patients.length > 0
                  ? patients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : patients
                ).map(patient => (
                

                  <TableRow key={patient._id} hover onClick={() => props.history.push('/general/'+patient._id)} 
                    state={ {patientId:patient._id}}  >
                    
                    <TableCell >
                    {patient.idNumber}
                    </TableCell>
                    <TableCell >
                    {patient.name+' '+patient.lastName}
                    </TableCell>
                    <TableCell >
                    {patient.city}
                    </TableCell>

                  </TableRow>

                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 10 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={patients.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Container>
       </Fragment>

       
    )
}

export default requireAuth( Search);