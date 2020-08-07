import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});



function Result() {

  const history=useHistory()
  const goBack=()=> {
    history.push("/");
  }
  const classes = useStyles();
  const rows=[1,2,3,4,5]
    
  
  return (
        <div>
 <h3>Result</h3>
 <div style={{margin:'300px',marginTop:'50px',marginBottom:'50px'}}>
 <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell><b>CLAUSE</b></TableCell>
            <TableCell align="right"><b>PREDICTION</b></TableCell>
            <TableCell align="right"><b>CONFIDENCE</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
    <div >
    <Button variant="contained" color="primary" style={{margin:'70px'}} onClick={()=>{alert('Button pressed')}}> 
                  Download 
                </Button> 
                <Button variant="contained" style={{margin:'70px'}} color="secondary" onClick={()=>{}}> 
                  View
                </Button> 
                <Button variant="contained" style={{margin:'70px'}}  onClick={goBack}> 
                  Back
                </Button> 
    </div>
        </div>
    )
}

export default Result
