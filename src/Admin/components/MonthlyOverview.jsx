import { AccountCircle, TrendingUp } from '@mui/icons-material'
import PaidIcon from '@mui/icons-material/Paid';
import CheckroonIcon from '@mui/icons-material/Checkroom';
import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        stats:"250K",
        title:"Sales",
        color:"yellow",
        icon:<TrendingUp sx={{fontSize:"1,75rem"}}/>
    },
    {
        stats:"18K",
        title:"Customers",
        color:"green",
        icon:<AccountCircle sx={{fontSize:"1,75rem"}}/>
    },
    {
        stats:"1.5K",
        title:"Products",
        color:"red",
        icon:<CheckroonIcon sx={{fontSize:"1,75rem"}}/>
    },
    {
        stats:"39K",
        title:"Revenue",
        color:"lightblue",
        icon:<PaidIcon sx={{fontSize:"1,75rem"}}/>
    },
    

]

const RenderStatus=()=>{
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display:"flex",
                alignItems:"center",
            }}>
                <Avatar variant='rounder' sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"common.white",
                    backgroundColor:`${item.color}`
                }}>
                    {item.icon}
                </Avatar>
                <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                }}>

                    <Typography variant='caption'>
                        {item.title}
                    </Typography>
                    <Typography variant='h6'>
                        {item.stats}
                    </Typography>

                </Box>

            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
    
    <Card sx={{bgcolor:"gray",color:"white"}}>
        <CardHeader title="Monthly Overview"
        action={
            <IconButton size='small'>
                <MoreVertIcon/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{
                    fontWeight:600
                }}>
                    Total 45% growth
                </Box>
                    😎 this month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:'2rem !important',
                letterSpacing:".15px !important",
            }
        }}
        />
        <CardContent sx={{
            pt:theme=>`${theme.spacing(3)} !important`
        }}>
            <Grid container spacing={[5,0]}>
                {RenderStatus()}
            </Grid>

        </CardContent>

    </Card>
  )
}

export default MonthlyOverview