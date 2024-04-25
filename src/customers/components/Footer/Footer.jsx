import {Button, Grid, Typography} from '@mui/material'
import React from 'react'

const Footer = () => {
    return(
        <div>
            <Grid className='bg-black text-white text-center mt-10'
            container
            sx={{
                bgcolor: 'black', color: 'white', py:3}}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Dyland Store</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button className='pb-5' variant='h6' gutterBottom>About us</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button className='pb-5' variant='h6' gutterBottom>Contact us</Button>
                    </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button className='pb-5' variant='h6' gutterBottom>FAQ</Button>
                </Grid>
                    
                <Grid className='pt' item xs={12}>
                    <Typography variant='body' component="p" align="center">©Le Nguyen Duc Duy - 2024 Ecommerce. All Rights Reserved</Typography>
                </Grid>
                
            </Grid>
            
        </div>
    )
}
export default Footer;