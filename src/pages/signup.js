import {useState} from "react";
import {useHistory} from "react-router-dom";
import InputField from "../component/inputfield"
import Button from "../component/button"

function SignUp(){
    
    const history = useHistory()
    const [values, setValues] = useState({})


    const onChange =(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }
    const gotosignin =(e) =>{
        e.preventDefault();
        history.push("/")
    }
     function getCurrentPosition(){
       navigator.geolocation.getCurrentPosition((position)=>{

           console.log({lng: position.coords.longitude, lat:  position.coords.latitude});
        //    setValues({lng: position.coords.longitude, lat:  position.coords.latitude})

           let data = {values: values, lng: position.coords.longitude, lat:  position.coords.latitude}
            fetch("http://localhost:5000/api/v1/signup",
            {
                method: "POST",
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json"
                },
        
            })
            .then(response=> response.json())
            .then(responseData=>{
                console.log(responseData);
            }, err=> console.log(err))
       })


    }

    function submit(e){
        e.preventDefault();
        getCurrentPosition()
    }
    
    return(
        <form>
            <h1>Sign Up</h1>
            <InputField type="text" label="Firstname" name="firstname" placeholder="eg. Dun" onChange={onChange}/>
            <InputField type="text" label="Lastname" name="lastname" placeholder ="eg. Kwabena" onChange={onChange}/>
            <InputField type="email" label="Email" name="email" placeholder="eg.daubena@gmail.com" onChange={onChange}/>
            <InputField type="password" label="Password" name="password" onChange={onChange}/>
            <InputField type="password" label="Confirm Password" name="cpassword" onChange={onChange}/>

            <div>
                <Button text="Submit" classname="btn-3" onClick ={submit}/>
                <Button text="Sign In" classname="btn-4" onClick={gotosignin}/>
            </div>
            
        </form>
    )

}
export default SignUp;