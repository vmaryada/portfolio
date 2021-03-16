import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';



function ContactMe() {
    return (
        <Grid container style={{marginTop:35}}>
        <Grid item sm={2} md={2}>&nbsp;</Grid>
        <Grid item sm={8} md={8} style={{marginLeft:10}}>
        <Typography variant="h4" style={{color:'navy'}}>Contact Me</Typography>
        <div style={{display: 'flex', alignItems: 'center',flexWrap: 'wrap', marginTop:35}}><PhoneIcon /><span>&nbsp;&nbsp;</span><Typography style={{color:'black', textDecoration:'none'}} component="a" href="tel:402-305-1244" variant="h6">+1 (402) 305-1244</Typography></div> 
        <div style={{display: 'flex', alignItems: 'center',flexWrap: 'wrap', marginTop:10}}><EmailIcon /><span>&nbsp;&nbsp;</span><Typography style={{color:'black', textDecoration:'none'}} variant="h6" component="a" href="mailto:vmaryada@unomaha.edu">vmaryada@unomaha.edu</Typography></div> 
        <div style={{display: 'flex', alignItems: 'center',flexWrap: 'wrap', marginTop:10}}><LinkedinIcon /><span>&nbsp;&nbsp;</span><Typography style={{color:'black', textDecoration:'none'}} variant="h6" component="a" href="https://linkedin.com/in/vmaryada">linkedin.com/in/vmaryada</Typography></div> 
        </Grid>
        <Grid item sm={2} md={2}>&nbsp;</Grid>
        </Grid>
    )
}

export default ContactMe
