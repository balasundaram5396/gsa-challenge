import React,{useContext,useState,useEffect} from 'react'
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
import { ClauseContext } from "../context/Context";
//import firebase from "firebase/app";

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});


function Result(props) {
 
  //const { state } = useContext(ClauseContext);
  // destructuring drug from the state
  // and rendering it in state
  //const { clause } = state;
  const [clauses,setClauses]=useState(props.location.state.detail)

  
  

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
            {clauses.map((item)=>
              <TableRow key={item.name}>
              <TableCell align="">
                    {item.text}
                    </TableCell>
                    <TableCell align="right">
                    {item.result}
                    </TableCell>
                    <TableCell align="right">
                    {item.score}
                    </TableCell>
                    </TableRow>

                    
                    )}
        </TableBody>
      </Table>
    </TableContainer></div>
    <div >
    <Button variant="contained" style={{margin:'70px'}}  onClick={goBack}> 
                  Back
                </Button> 
    <Button variant="contained" color="primary" style={{margin:'70px'}} onClick={()=>{alert('Button pressed')}}> 
                  Download 
                </Button> 
                <Button variant="contained" style={{margin:'70px'}} color="secondary" onClick={()=>{setClauses([])}}> 
                  Clear
                </Button> 
               
    </div>
        </div>
    )
}

export default Result
