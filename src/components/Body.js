import React, { useState } from 'react';
import { makeStyles,useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';


 const useStyles = makeStyles(theme => ({
    enterPriseButton:{
        backgroundColor:'white',
        border:'1px solid #237dff',
        height:45,
        width:'auto',
        color:'blue',
        marginRight:50,
        marginTop:30,
        textTransform:'none'
        },
    chainButton:{
        backgroundColor:'#237dff',
        border:'1px solid #237dff',
        height:45,
        width:'auto',
        color:'white',
        marginRight:50,
        marginTop:30,
        textTransform:'none',
        "&:hover":
        {
            backgroundColor:'#237dff'
        }
    },
    itemContainer:
    {
        paddingBottom:'7em'
    },
    searchBox:{
        paddingTop:'0.687em',
        paddingBottom:'0.687em',
        paddingLeft:'1.5em',
        paddingRight:'3em',
        fontSize:'1rem',
        backgroundColor:'#fff',
        border:'1px solid #eee',
        borderRight:'none',
        outline:'none',
        width:"50%",
        margin:0
    }
 }));

 
const Body = () =>
{
  const classes = useStyles();
  const theme = useTheme();
  const [value,setValue] = useState('');
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [companyData,setCompanyData] = useState(null);

  const onSubmitHandler = async (e) =>
  {
      e.preventDefault();
    //   if(value.length === 0)
    //   {
    //     return alert("please enter the company name!");
    //   };
      
    axios.get(`https://g2-task-manager.herokuapp.com/companies?name=${value}`)
    .then((data) =>
    {
        setCompanyData(data.data);
        console.log(data.data)
    }).catch(e)
    {
        console.log("error --->",e.message);
    }
  }

    return (
            <Grid container direction="column" className={classes.mainContainer}>

                
                    <Grid item container className={classes.itemContainer} justifyContent="flex-start" alignItems="center" direction="row">
                        <Grid item sm >
                            <Typography align='center' variant='h3' gutterBottom>Always-on enterprise intelligence</Typography>
                            <Typography align="center" variant='body1'>Monitor and understand the companies that matter to you.</Typography>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button component={Link} to="/estimate" variant="outlined" className={classes.enterPriseButton}>Enterprise Solutions</Button>
                                </Grid>
                                <Grid item>
                                    <Button component={Link} to="/estimate" variant='contained' className={classes.chainButton}>Supply Chain Solutions</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item container  className={classes.itemContainer} justifyContent='center' alignItems="center" direction="column">
                            <Grid item>
                            <Typography align='center' variant='h4' style={{fontWeight:600,color:'black',marginBottom:'1rem'}} gutterBottom> Search the directory </Typography>
                            </Grid>
                            
                            <Grid item container justifyContent='center' alignItems="center" direction="row">
                              <input type="text" value={value} onChange={(e) => { setValue(e.target.value)}} placeholder="search for companies ..." className={classes.searchBox} />
                              <Button 
                              style={{backgroundColor:'#fff',padding:0,height:42.8,border:'1px solid #eee',borderLeft:'none',margin:0}}
                              onClick={onSubmitHandler}
                              >
                                <SearchIcon />
                              </Button>
                              
                            </Grid>    
                    </Grid>

                    <Grid item container className={classes.itemContainer} justifyContent='center' alignItems="center" direction="column">
                            <Grid item>
                            <Typography variant={'h4'}>{companyData?.company_name}</Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant={'body1'} paragraph>{companyData?.location}</Typography>
                            </Grid>
                            
                    </Grid>
    
            </Grid>
        );
};

export default Body;