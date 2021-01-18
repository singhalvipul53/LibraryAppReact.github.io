import React, { useState } from 'react'
import './Login.css'
import { Button, Input } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


const Login = () => {
    const [value,setValue]=useState('')
    const dispatch=useDispatch()
    const input=(e)=>{
        setValue(e.target.value)
    }
    const signIn=()=>{
        dispatch(login({
            name:value
        }))
    }
    return (
        <div className='login'>
            <div className='login_container'>
                <h1>Welcome to Library</h1>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg/1200px-Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg' alt=''/>
                <div className='login_input'>
                <Input type='text' value={value}
                 placeholder='Enter Your Name' onChange={input}/>
                <Button  variant="outlined" 
                onClick={signIn}>Enter Library</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Login
