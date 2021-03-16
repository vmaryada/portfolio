import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SocialMedia from '../assets/social_media.jpeg';
import Search from '../assets/search.png';
import slider from '../assets/slider.gif';

function Projects() {
    return (
        <Grid container style={{ marginTop: 35 }}>
            <Grid item sm={2} md={2}>&nbsp;</Grid>
            <Grid item sm={8} md={8}>
                <Typography variant="h4" style={{ marginLeft:10, color: 'navy' }}>Projects</Typography>
                <Grid container style={{ marginTop: 20 }}>
                    <Grid item md={6} sm={12}>
                        <Link  href='https://vmaryada.github.io/rooster/#/'>
                            <Card style={{ margin: 15 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={SocialMedia}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Social Media Application
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            A twitter like application where users can login/Signup and create an account to post.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
      
    </Card>
    </Link>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Link href='https://milanlaser.com/search'>
                            <Card style={{ margin: 15 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={Search}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Search Application
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            A search application to return results depending on the search term entered. Also tracking every search.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <Link  href='https://www.npmjs.com/package/react-native-before-after-slider-v2'>
                            <Card style={{ margin: 15 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={slider}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            React Native Slider v2
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        This is a comparison slider component to compare two images, components and etc.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
      
    </Card>
    </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={2} md={2}>&nbsp;</Grid>
        </Grid>
    )
}

export default Projects
