
 import {useHistory} from "react-router-dom";
 import Inputfield from "../component/inputfield";
import Button from "../component/button"
import { useState } from "react";

function UploadPage(){
    const history =useHistory()
    const goToPage=(path) =>{
        
        history.push(path)
    }
    const [values, setValues]= useState({})
    const onChange =(e)=>{
        setValues({...values,[e.target.name]: e.target.value})
    }
    const submit=()=>{
        
    }
   
    return(<div className= "serve">
        <Inputfield className="feel" type="text" label="Description" name="description" placeholder="Add a brief description about your place" onChange={onChange}/>
        <input type="file"/>
        
        <Button text="Log Out" classname="btn-0" onClick={()=>goToPage("/")}/>
        <Button text="Save" classname="btn-01" onClick={submit}/>

    </div>

    )

};

export default UploadPage;