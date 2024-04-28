import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../State/Auth/Action'

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        dispatch(login(userData))
        console.log(userData)
    }
  return (
    <div>
        <h1 className='text-center text-2xl font-bold py-3' >Login</h1>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
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
                        autoComplete="password"/>
                </Grid>   
                <Grid item xs={12}>
                    <Button 
                    className='bg-[#9155FD] w-full' 
                    type="submit" 
                    variant="contained" 
                    size="large"
                    sx={{padding:".8rem 0"}}>
                        Login
                    </Button>
                </Grid>  
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>Dont' have an account?</p>
                <Button onClick={()=>navigate('/register')}
                className='ml-5' 
                size="small" 
                >
                    Register Now !
                </Button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm