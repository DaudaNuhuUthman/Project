import { useHistory } from "react-router-dom"
import { useState } from "react"


import InputField from "../component/inputfield";
import Button from "../component/button"

function SignIn() {
  const history = useHistory()
  const [values, setValues]= useState({})
 
 
  function onchangevalues(e){
    setValues({...values,[e.target.name]: e.target.value})

  }

  const gotosignup = (e) => {
    e.preventDefault();
    history.push("/signup")
  }

  function submit(e){
    e.preventDefault();

    let json_object=JSON.stringify(values)
    fetch("http://localhost:5000/api/v1/signin", {
      method:"POST",
      body:json_object,
      headers: {"Content-Type":"application/json"}
    })
    .then ((res)=>res.json())
    .then (
      (res)=>{
        if (res.success) {

          
        } else if (res.failed) {
          alert("wrong user or password")
          
        } else if (res.notexist) {
          
          alert("user doesn't exist")
        }
          },
      (err) => console.log(err)
    )

  }
  return (
      <form>
        <h1>Sign In</h1>
        <InputField type="email" label="Email" name="email" onChange={onchangevalues} placeholder="eg.daubena@gmail.com"/>
        <InputField type="password" label="Password" name="password" onChange={onchangevalues} />
        <div>
        <Button text="Submit" classname="btn-5" onClick={submit}/>
        <Button text="Sign Up" classname="btn-6" onClick={gotosignup}/>
        </div>
      </form>
  );
}

export default SignIn;
