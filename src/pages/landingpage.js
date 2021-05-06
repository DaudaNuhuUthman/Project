import {useState} from "react";
import Button from "../component/button";
import {useAppContext} from "../appcontext";
import SignIn from "./signin";
import SignUp from "./signup.js";
import Map from "../component/googlemap/map"
import {useHistory} from "react-router-dom"

const LandingPage =()=>{
    const {state, dispatch} = useAppContext()
    const [btn,setbtn] =useState(false)

    const changestate =(type) =>{
        dispatch({type:type})
    }

    const history =useHistory()
    const goToPage=(path) =>{
        
        history.push(path)
    }


    return(
        <div className="landing">
         <div>
          <navbar className= "niv">
                  <h1 className="one" img src="logo.jpg" alt=" image">Welcome to Ifound</h1>
                    <h4 className="two">Find</h4>  
                    <select className="two">
                    <option value=""></option>
                        <option value="Clothes"> clothes</option>
                        <option value="Food"> Food</option>
                        <option value="Repair Shops"> Repairs</option>
                        <option value="Groceries"> Groceries</option>
                        <option value="Pharmacy"> Pharmacy</option>
                        <option value="Beauty"> Beauty</option>
                        <option value="electronics"> Electronics</option>
                        <option value="Hospital and Clinic"> Hospital and Clinic</option>
                        <option value="Mobile Banking"> Mobile Banking</option>
                        <option value="Public Building"> Public Building</option>
                        <option value="School and Training"> School and Training</option>
                        <option value="other"> Other</option>

                    </select>
                
                  <p className= "this" onClick={()=>goToPage("/signup")}> <i> Do you want to be found?</i> </p>
          </navbar>
        </div>
           {<Map/>}  
            {/* <Button text="Sign In" classname={"btn-1"} onClick={()=> changestate("showsignin")}/>
            <Button text="Sign up" classname={"btn-2"} onClick={()=> changestate("showsignup")}/>
            {state.showsignin && <SignIn/>}
            {state.showsignup && <SignUp/>} */}
        </div>
    );
}

export default LandingPage;