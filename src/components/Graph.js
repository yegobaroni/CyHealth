import React from 'react';
import { useState, useEffect } from 'react';
import {  Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function Graph() {

  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2efe3e9672mshd7df38911c7c79bp14c084jsn671cba53c9e8',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02', options)
	.then(response => response.json())
	.then(data => setHistoryData(data.response))
	.catch(err => console.error(err));
  }, []);

  // console.log(historyData);
  const lineChart = (
    historyData.length ? (
      <Line
      data={{
        labels: historyData.map((item) => item.time),
        datasets: [{
          label: 'Total Cases',
          data: historyData.map((item) => item.cases.total),
          borderColor: '#3333ff',
          fill: true,
        },
          {label: 'Total Deaths',
          data: historyData.map((item) => item.deaths.total),
          borderColor: 'rgba(255, 0, 0, 0.5)',
          
          fill: true,
        },
          {label: 'Total Tests',
          data: historyData.map((item) => item.tests.total),
          borderColor: 'rgba(0, 255, 0, 0.5)',
          fill: true,
        }],
      }} 
    />
    ) : null
  )

  return (
    <div className='chart'>
        {lineChart}
    </div>
  )
}

export default Graph;