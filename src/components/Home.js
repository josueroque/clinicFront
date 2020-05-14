import React,{Fragment} from 'react';
import SideBar from './SideBar';
import { Container } from '@material-ui/core';
const Home=(props)=>{

    return(
        
        <Fragment>
                     
            <SideBar></SideBar>
            <Container className="Container-Home">
                <h1>GYNECOLOGISTS INFORMATION SYSTEMS</h1>
            </Container>
             {/* <h2>Improving your patients atention</h2> */}
        </Fragment>
    )


}

export default Home; 