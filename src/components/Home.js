import React,{useState,useContext} from 'react'
import {Button} from '@material-ui/core'
import axios from 'axios'; 
import { useHistory } from "react-router-dom";
import { ClauseContext } from "../context/Context";
import { SET_CLAUSE } from "../context/action.types";
//import firebase from "firebase/app";


function Home() {

const[selectedFile,setSelectedFile]=useState(null)
const { state,dispatch} = useContext(ClauseContext);
const { SET_CLAUSE }=state;

  const history=useHistory()

   const onFileUpload=()=>{
    // dispatch({
    //   type: SET_CLAUSE,
    //   payload: null,
    //   key: null
    // });
      // const formData = new FormData(); 
     
      // // Update the formData object 
    
      // // Details of the uploaded file 
      // console.log(selectedFile); 
      // //history.push("/result");
      // // Request made to the backend api 
      // // Send formData object 
      // axios.post("api/uploadfile", formData); 
      alert('File uploaded successfully')
       history.push("/result");
    }

    const onFileChange = event => { 
     
      // Update the state 
      setSelectedFile({ selectedFile: event.target.files[0] }); 
     
    }; 

    const fileData = () => { 
     
      if (selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {selectedFile.size}</p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h6>Choose before Pressing the Upload button</h6> 
          </div> 
        ); 
      } 
    }; 
    return (
        <div>
            <h3>File upload</h3>
            <div style={{margin:'50px'}}> 
                <input type="file"  onChange={onFileChange} /> 
            </div> 
                <Button variant="contained" color="primary" onClick={onFileUpload}> 
                  Submit
                </Button>                
        </div>
    )
}

export default Home
