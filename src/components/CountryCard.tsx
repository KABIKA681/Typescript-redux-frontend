import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../asset/pexels-karolina-grabowska-4386346.jpg'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        maxHeight:450,
        color: "black",
        background: "#F2F2F2"
    },
});

export default function CountryCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="CountryPicture"
                    height="100"
                    src={image}
                    title="CountryPicture"
                />
                <CardContent>
                    <Typography gutterBottom style={{ fontSize: 20 }} component="h2">
                        Afganistan
                    </Typography>
                    <Typography style={{ fontSize: 16, color: "gray", fontFamily: "poppins, sans-serif" }} color="textSecondary" component="p">
                        <ul>
                            <li>
                                population : value
                            </li>
                            <li>
                                population : value
                            </li>
                            <li>
                                population : value
                            </li>
                        </ul>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ marginLeft: 0, marginBottom:10, justifyContent: 'space-around' }}>
                <div className="cursor-pointer bg-green p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 " viewBox="0 0 20 20" fill="#5CC33A">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 " fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </div>
                <div className="cursor-pointer bg-gray-400 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
            </CardActions>
        </Card>
    );
}

