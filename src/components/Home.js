import React from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";


function Home() {

    const history=useHistory()
    const goNext=()=> {
      history.push("/result");
    }

    return (
        <div>
            <h3>File upload</h3>
            <div style={{margin:'50px'}}> 
                <input type="file"  onChange={()=>{}} /> 
                </div> 
                <Button variant="contained" color="primary" onClick={goNext}> 
                  Submit
                </Button> 
            
        </div>
    )
}

export default Home
