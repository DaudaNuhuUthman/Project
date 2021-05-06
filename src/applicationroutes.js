import {Switch, Route} from "react-router-dom";
import LandingPage from "./pages/landingpage";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import UploadPage from "./pages/uploadpage"


const ApplicationRoutes =()=>{
    return(
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/signin" component ={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/uploadpage" component={UploadPage}/>
        </Switch>
    )

}
export default ApplicationRoutes;