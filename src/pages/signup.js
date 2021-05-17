import {useState} from "react";
import {useHistory} from "react-router-dom";
import InputField from "../component/inputfield"
import Button from "../component/button"
import Select from "../component/select"

function SignUp(){

    
    const history = useHistory()
    const [values, setValues] = useState({})

    const onChange =(e)=>{
        console.log(e.target.name)
        setValues({...values, [e.target.name]: e.target.value})
    }
    const gotosignin =(e) =>{
        e.preventDefault();
        
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
    // console.log(values)

    function submit(e){
        e.preventDefault();
        getCurrentPosition();
        history.push("./signin")


    }
    
    return(
        <form>
            <h1>Sign Up</h1>
            <InputField type="text" label="Fullname" name="fullname" placeholder="eg. Kwabena Mark" onChange={onChange}/>
            <InputField type="text" label="Place Name" name="pname" placeholder ="eg. Mark Plumbing Works" onChange={onChange}/>
            <InputField type="email" label="Email" name="email" placeholder="eg.daubena@gmail.com" onChange={onChange}/>
            <InputField type="password" label="Password" name="password" onChange={onChange}/>
            <InputField type="password" label="Confirm Password" name="cpassword" onChange={onChange}/>
            <Select name="category" onChange={onChange}/>
        
            <div>
                <Button text="Submit" classname="btn-3" onClick ={submit}/>
                <div>
                <p>Already have an account? <a href=""className="style" onClick={gotosignin}><i>Sign In</i></a></p>
                {/* <Button text="Sign In" classname="btn-4" /> */}
                </div>
               
            </div>
            
            
        </form>
    )

}
export default SignUp;