import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useDispatch, } from 'react-redux';
import { removeCountryAction } from '../../redux/actions';




const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        maxHeight: 480,
        color: "black",
        background: "#F2F2F2",
        marginRight: 40,
        marginBottom: 40
    },
});

type CountryCardProps = {

    flag: string
    name: string
    region: string
    population: number
    capital: string
    currency: string[]
    onClick: Function


}

export default function CountryCard({ flag, name, region, population, capital, currency, onClick }: CountryCardProps) {
    // const country = useSelector((state: IState) => state.removeCountryReducer.country)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleDelete = (name: any) => {
        dispatch(removeCountryAction(name))
    }


    const classes = useStyles();

    const handleOnClick = () => {

    }

    return (
        <Card className={classes.root} key={name} onClick={() => navigate('/country/detail', { state: { flag, name, region, population, capital, currency } })}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    height="200px"
                    src={flag}
                    title="CountryPicture"
                    style={{ fontSize: 16, color: 'lightslategrey', fontFamily: 'poppins, sans-serif' }}
                />
                <CardContent>
                    <Typography gutterBottom style={{ fontSize: 18 }} component="p">
                        {name}
                    </Typography>
                    <Typography style={{ fontSize: 16, color: "gray", fontFamily: "poppins, sans-serif" }} color="textSecondary" component="p">
                        <ul>
                            <li>
                                population : {population}
                            </li>
                            <li>
                                Capital : {capital}
                            </li>
                            <li>
                                Region : {region}
                            </li>
                            <li>
                                Currency : {currency}
                            </li>
                        </ul>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ marginBottom: 10, justifyContent: 'space-between', float: 'right' }} key={name}>
                <div className='flex '>
                    <div className="cursor-pointer  bg-gray-400  p-3 rounded-full " onClick={() => handleDelete(name)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6 " fill="none" viewBox="0 0 22 22" stroke="white">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                    <div className="cursor-pointer bg-green p-1 " onClick={() => onClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-16" viewBox="0 0 20 20" fill="#5CC33A">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>


            </CardActions>
        </Card>

    );
}

