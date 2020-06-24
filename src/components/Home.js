import React,{Fragment,useContext} from 'react';
import SideBar from './SideBar';
import { Container } from '@material-ui/core';
import {UsersContext} from '../context/UsersContext'; 
const Home=(props)=>{
    const {auth}=useContext(UsersContext);
    
    console.log(auth);
    return(
        
        <Fragment>
                     
            <SideBar></SideBar>
            <Container className="Container-Home">
                <h1 className="HistoryTitle">GYNECOLOGISTS INFORMATION SYSTEMS</h1>
            </Container>
             {/* <h2>Improving your patients atention</h2> */}
        </Fragment>
    )


}

export default Home; 