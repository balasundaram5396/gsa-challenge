import React,{useState,useContext} from 'react'
import {Button} from '@material-ui/core'
import axios from 'axios'; 
import { withRouter } from 'react-router-dom';
import { ClauseContext } from "../context/Context";
import { SET_CLAUSE } from "../context/action.types";
import { render } from '@testing-library/react';
//import firebase from "firebase/app";


class Home extends React.Component{

//const[selectedFile,setSelectedFile]=useState([])
//const { state,dispatch} = useContext(ClauseContext);
//const { SET_CLAUSE }=state;

constructor(props) {
  super(props);
  this.state = {
    files: [],
  };
}


    uploadFile=(e)=> {
    e.preventDefault();
    //console.log('110')
    console.log(this.state.files)
    let file = this.state.files;
    //console.log('111')
    console.log(file)
    console.log(this.state.files)
    const formData = new FormData();
    //console.log('1')
    formData.append("file", file);
    //console.log('2')
    axios
      .post("/api/upload", formData)
      .then(res => console.log(res))
      .catch(err => console.warn(err));
  
      alert('File uploaded successfully')
     // console.log(files)
     this.props.history.push('/result')
       //history.push("/result");
    }

     onFileChange = event => { 
      let files = event.target.files;
    this.setState({ files: files[0] }, () => { console.log(this.state.files) });
    }

    render(){
    return (
        <div>
            <h3>File upload</h3>
            <div style={{margin:'50px'}}> 
                <input type="file"  onChange={this.onFileChange} /> 
            </div> 
                <Button variant="contained" color="primary" onClick={this.uploadFile}> 
                  Submit
                </Button>                
        </div>
    )
}
}

export default Home


//backend code
// @app.route('/api/upload', methods = ['POST'])
// def upload_file():
//     file = request.files['file']
//     print(file)
//     return "done"