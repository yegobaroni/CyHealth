import React from 'react';
import {useState, useEffect} from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

function ShowCase() {

  const [showData, setShowData] = useState({});


  useEffect(() => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3925a2cac0msh8526ea65ef8bd8cp1bb3d4jsnaf65a378a6b3',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics', options)
	.then(response => response.json())
	.then(response => setShowData(response.response))
	.catch(err => console.error(err));
  }, []);

  // if(!showData.cases) {
  //   return 'Loading...';
  // }

  // const totalData = showData.map((item) => item.cases.total)

  return (

    <div className='container'>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item component={Card} className='card' xs={12} md={3}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>Cases</Typography>
              <Typography variant='h5'>
                {/* <CountUp
                start={0} end={totalData} duration={2.5} separator=","
                /> */}
                {/* historyData.map((item) => item.cases.total) */}
                Data
              
              </Typography>
              {/* <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography> */}
              <Typography variant='body2'>No. of Total cases</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} className='card' xs={12} md={3}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>Deaths</Typography>
              <Typography variant='h5'>
                Data
              </Typography>
              {/* <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography> */}
              <Typography variant='body2'>No. of Total Deaths</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} className='card' xs={12} md={3}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>Tests</Typography>
              <Typography variant='h5'>
                Data
              </Typography>
              {/* <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography> */}
              <Typography variant='body2'>No. of Total Tests</Typography>
            </CardContent>
          </Grid>
        </Grid>
    </div>
    // <div className='container'>
    //   <div className='case'>
    //     <h4>Total Confirmed</h4>
    //   </div>
    //   <div className='case'>
    //     <h4>Total Recovered </h4>
    //   </div>
    //   <div className='case'>
    //     <h4> Total Deaths</h4>
    //   </div>
    // </div>
  )
}

export default ShowCase;