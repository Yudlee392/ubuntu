import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing = {2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"blue"}}>R</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Dyland</p>
                        <p className='opacity-70'>Sep 3, 2002</p>
                    </div>
                </div>
                <Rating value={4.4} name="half-rating" readOnly precision={0.1}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aperiam ipsa dolorum doloribus corporis amet itaque unde labore odio,
                     fugiat cupiditate neque repellendus inventore voluptas quisquam quidem tempore beatae exercitationem sed.
                </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard