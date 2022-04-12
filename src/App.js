import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ButtonGroup from '@mui/material/ButtonGroup';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import GoogleForm from './googleForm';


const App=() =>{
 return(
     <>
        {/* <Button size="large" color="secondary" variant="contained">Large button</Button><br></br><br></br>
        <Button size="medium" variant="outlined" color="secondary">Medium button </Button><br></br><br></br>
        <Button href="https://www.google.com/"size="small" variant="contained">Google button</Button><br></br><br></br>
        <Button href=""size="Medium" variant="contained" disabled> Disabled button</Button><br></br><br></br>
        
        <h2> This is Icon Buttons </h2> 
        <IconButton color="secondary" variant="contained">
            <DeleteIcon/>
            <AlarmIcon/>
            <AddShoppingCartIcon/>
            <Fingerprint/>
        </IconButton>
        <h2> These are Buttons group </h2> 
        <ButtonGroup >
            <Button color="secondary" variant="contained" style={{ color: "white", background: "lightblue"}} > one </Button><br></br>
            <Button color="secondary" variant="contained" style={{ color: "white", background: "lightblue"}}> two </Button>
            <Button color="secondary" variant="contained" style={{ color: "white", background: "lightblue"}}> three </Button>
        </ButtonGroup>

        <Button style={{ background:"green", color:"white"}}> Custom Button </Button><br></br><br></br>

        <ButtonGroup orientation="vertical">
            <Button color="secondary" variant="contained" style={{ color: "white", background: "lightblue"}} > one </Button>
            <Button color="secondary" variant="contained" style={{ color: "white", background: "lightblue"}}> two </Button>
            <Button color="secondary" variant="contained" style={{ color: "white", background: "lightblue"}}> three </Button>
        </ButtonGroup>
        <PhotoCamera> Camera </PhotoCamera> */}
        <GoogleForm/>
        {/* <ClassComponent/> */}
     </>
 );
}
export default App;
