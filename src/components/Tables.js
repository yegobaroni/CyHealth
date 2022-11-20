import React from 'react';
import {useState, useEffect} from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@material-ui/core';

function Tables() {

  const [tableData, setTableData] = useState([]);
  const [query, setQuery] = useState("");

   useEffect(() => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2efe3e9672mshd7df38911c7c79bp14c084jsn671cba53c9e8',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics', options)
	.then(response => response.json())
	.then(response => setTableData(response.response))
	.catch(err => console.error(err));
  }, []);
  

  const tableResponse = tableData.map((item, index) => {
    return <TableRow key={index}>
    <TableCell>{item.continent}</TableCell>
    <TableCell>{item.country}</TableCell>
    <TableCell align='center'>{item.cases.total}</TableCell>
    <TableCell align='center'>{item.deaths.total}</TableCell>
    <TableCell align='center'>{item.cases.recovered}</TableCell>
    <TableCell align='center'>{item.tests.total}</TableCell>
    {/* <td>{item.day}</td> */}
    {/* <td>{item.time}</td> */}
    </TableRow>
  });
  
  function handleChange (e) {
    setQuery(e.target.value)
  };

  function handleClick () {
    setTableData(tableData.filter((data) => data.country === query))
  };

  return (
    <>
    <div>
      <div className='split'>
        <div className='record'>World Records</div>
        <div className='search'>
         <input type="text" placeholder="Type Country" onChange={handleChange}></input>
         <button onClick={handleClick}>Search</button>
        </div>
      </div>
   
    </div>

    <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
      <Table aria-label=' simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Continent</TableCell>
            <TableCell>Country</TableCell>
            <TableCell align='center'>Total Cases </TableCell>
            <TableCell align='center'>Total Deaths</TableCell>
            <TableCell align='center'>Total Recoveries</TableCell>
            <TableCell align='center'>Tota Tests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tableResponse}</TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Tables;

