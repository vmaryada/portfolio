import React from 'react';
import HomeBackground from '../assets/background.jpg';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Vmaryada from '../assets/vmaryada.jpg';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
    background: {
      width: '100%',
      height: '80vh',
      backgroundImage: `url(${HomeBackground})`,
      backgroundSize:'cover',
      backgroundPositionY: -200,
      justifyContent:'center',
      alignContent:'center'
    }
})
export default function Home(){
    const classes = useStyles();
return(
    <>
    <Grid container className={classes.background}>
    <Grid item sm={6} md={6} style={{textAlign:'center'}}>
    <img src={Vmaryada} alt="Vineeth Reddy Maryada" width={300} style={{borderRadius:'80%'}}/>
    </Grid>
    <Grid item sm={6} md={6} style={{marginTop:65}}>
    <Typography style={{color:'white'}} variant="h3">Hi I am Vineeth,</Typography>
    <Typography style={{color:'white'}} variant="h4">a Full Stack Application Developer in Omaha, NE</Typography>
    </Grid>
    </Grid>

    <Grid  container style={{height:300, width:'100%', justifyContent:'center', alignContent:'center'}}>
    <Grid item sm={6} md={6} style={{textAlign:'center'}}>
<Typography  variant="h3" style={{marginTop:15}}>About Me</Typography>
</Grid>
<Grid item sm={6} md={6}>
<Typography variant="h5">A Fullstack Application Developer with over 4 years of experience</Typography>
<br/>
<Typography variant="body1">I have designed, developed, tested multiple React js Applications from scratch.</Typography>
<br/>
<Typography variant="body1">Designed and developed an iOS app from scratch and deployed it to AppStore.</Typography>
<br/>
<Typography variant="body1">Developer and deployed several Apex classes and Triggers in Salesforce.</Typography>
<br/>
<Typography id="about_me" variant="body1">Developed backednd APIs using Express JS, Node JS and Firebase cloud functions.</Typography>
</Grid>
    </Grid>
    </>
)
}