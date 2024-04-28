import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getUser, regiter } from '../../State/Auth/Action'

const RegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem('jwt')
    const {auth} = useSelector(store => store)

    useEffect(() => {
        if(jwt){
            dispatch(getUser(jwt))
        }
        
    },[jwt,auth.jwt]);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        
        const data = new FormData(e.currentTarget)
        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        }
        dispatch(regiter(userData))
        console.log("userData",userData)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordError('');
    }
  return (
    <div>
        <h1 className='text-center text-2xl font-bold py-3' >Register</h1>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"/>
                </Grid> 
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="given-name"/>
                </Grid>  
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"/>
                </Grid>  
                <Grid item xs={12}>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Password"
                        type='password'
                        fullWidth
                        autoComplete="password"
                        value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                </Grid>   
                <Grid item xs={12}>
                    <TextField
                        required
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type='password'
                        fullWidth
                        autoComplete="password"
                        value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            error={passwordError !== ''}
                            helperText={passwordError}/>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                    className='bg-[#9155FD] w-full' 
                    type="submit" 
                    variant="contained" 
                    size="large"
                    sx={{padding:".8rem 0"}}>
                        Register
                    </Button>
                </Grid>  
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>Already have an account?</p>
                <Button onClick={()=>navigate('/login')}
                className='ml-5' 
                size="small" 
                >
                    Login
                </Button>
            </div>
        </div>
    </div>
  )
}

export default RegisterForm