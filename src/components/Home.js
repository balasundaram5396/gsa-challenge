import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ClauseContext } from "../context/Context";
import { SET_CLAUSE } from "../context/action.types";
import { render } from "@testing-library/react";
//import firebase from "firebase/app";
import Result from "./Result";

class Home extends React.Component {
  //const[selectedFile,setSelectedFile]=useState([])
  //const { state,dispatch} = useContext(ClauseContext);
  //const { SET_CLAUSE }=state;

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      res: {
        //   "results": [
        //     {
        //         "result": "acceptable",
        //         "score": "0.9578069",
        //         "text": "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //     },
        //     {
        //         "result": "acceptable",
        //         "score": "0.9578069",
        //         "text": "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //     }
        // ]
      },
      buttonName: "Submit",
      fileSelect: false,
    };
  }

  uploadFile = async (e) => {
    e.preventDefault();
    this.setState({ fileSelect: false, buttonName: "Uploading..." });
    let file = this.state.files;
    //console.log('111')
    //console.log(this.state.files)
    const formData = new FormData();
    formData.append("file", file);
    //console.log(formData)
    await axios({
      url: "http://ec2-54-160-31-239.compute-1.amazonaws.com:5000/analysis",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "text/file",
      },
    })
      .then((response) => {
        this.setState({ res: response.data }, () => {
          console.log("Fetching response");
        });
      })
      .then(console.log("Uploaded"))
      .catch((error) => {
        console.log("error");
        //setResponse("error");
      });
    alert("File uploaded successfully");
    // //this.props.history.push('/result')
    await this.props.history.push({
      pathname: "/result",
      state: { detail: this.state.res.results },
    });
  };

  onFileChange = (event) => {
    let files = event.target.files;
    this.setState({ files: files[0], fileSelect: true }, () => {
      console.log(this.state.files);
    });
  };

  render() {
    return (
      <div>
        <h3>File upload</h3>
        <div style={{ margin: "50px" }}>
          <input type="file" onChange={this.onFileChange} />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.uploadFile}
          disabled={
            this.state.files === undefined || this.state.fileSelect === false
              ? true
              : false
          }
        >
          {this.state.buttonName}
        </Button>
      </div>
    );
  }
}

export default Home;
