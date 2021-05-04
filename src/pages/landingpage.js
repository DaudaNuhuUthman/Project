import {useState} from "react";
import Button from "../component/button";
import {useAppContext} from "../appcontext";
import SignIn from "./signin";
import SignUp from "./signup.js";
import Map from "../component/googlemap/map"

const LandingPage =()=>{
    const {state, dispatch} = useAppContext()
    const [btn,setbtn] =useState(false)

    const changestate =(type) =>{
        dispatch({type:type})
    }

    return(
        <div className="landing">
            {/* {<Map/>} */}
            <Button text="Sign In" classname={"btn-1"} onClick={()=> changestate("showsignin")}/>
            <Button text="Sign up" classname={"btn-2"} onClick={()=> changestate("showsignup")}/>
            {state.showsignin && <SignIn/>}
            {state.showsignup && <SignUp/>}
        </div>
    );
}

export default LandingPage;