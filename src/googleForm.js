import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const GoogleForm = () => {

    const [formData, SetFormData] = useState({
        FullName: "",
        emailId: "",
        password: "",
        phone: "",
    });


    const InputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        var NameAttribute = event.target.name;
        var valueAttribute = event.target.value;


        SetFormData(
            (preValue) => {

                // return{
                //     ...preValue,
                //     [formData]: SetFormData,
                // };


                 console.log(preValue);
                console.log(preValue);
                if (NameAttribute === 'Name') {
                    return {
                        FullName: valueAttribute,
                        emailId: preValue.emailId,
                        password: preValue.password,
                        phone: preValue.phone,
                    }
                } else if (NameAttribute === 'email') {
                    return {
                        FullName: preValue.FullName,
                        emailId: valueAttribute,
                        password: preValue.password,
                        phone: preValue.phone,
                    }
                } else if (NameAttribute === 'password') {
                    return {
                        FullName: preValue.FullName,
                        emailId: preValue.emailId,
                        password: valueAttribute,
                        phone: preValue.phone,
                    }
                } else if (NameAttribute === 'phone') {
                    return {
                        FullName: preValue.FullName,
                        emailId: preValue.emailId,
                        password: preValue.password,
                        phone: valueAttribute,
                    }
                }
                
            }
        );


    };


    const FormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        alert("form submit successfully");


    }
    return (
        <>
            <h1>This is  Google Form </h1>
            <h2> First Name: {formData.FullName}</h2>
            <h2> your email: {formData.emailId}</h2>
            <h4> your password: {formData.password}</h4>
            <h4> Phone Number: {formData.phone} </h4>


            <form onSubmit={FormSubmit}>
                <div className='GoogleForm'>

                    <div className='InsideDiv'>
                        <TextField id="TextField" variant='standard' required label="Enter your name " onChange={InputEvent} value={formData.FullName} name="Name" /><br></br><br></br>

                        <TextField type="email" id="TextField" variant='standard' required label="Enter your Email "  onChange={InputEvent} value={formData.emailId} name="email" /><br></br><br></br>

                        <TextField type="password" id="TextField" variant='standard' required label="Enter your password"
                         onChange={InputEvent} name="password" /><br></br><br></br>

                        <TextField type="Number" id="TextField" variant='standard' required label="Enter your Phone number"  onChange={InputEvent} name="phone" /><br></br><br></br>

                        <label className="label"> Hobbies</label><br></br>

                        <label>Reading Book </label><Checkbox />
                        <label>Cricket </label><Checkbox />
                        <label>Coding  </label><Checkbox /><br></br><br></br>

                        {/* <FormControlLabel /> */}
                        <InputLabel> Age </InputLabel>
                        <Select >
                            <em>None</em>
                            <MenuItem> 10</MenuItem>
                            <MenuItem> 14</MenuItem>
                            <MenuItem> 18</MenuItem>
                            <MenuItem> 23</MenuItem>
                        </Select><br></br><br></br>
                        <Button type="submit" color="secondary" variant='contained' > Submit </Button> <br></br><br></br>
                        <Button type="Reset" color="secondary" variant='contained' > Reset  </Button>
                    </div>
                </div>
            </form>
        </>
    );
}
export default GoogleForm;