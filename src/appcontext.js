import {createContext, useContext, useReducer} from "react"
const AppContext =createContext()
const initialState={
    showsignin: false,
    showsignup:false
}

const reducer =(state,action)=>{
    switch(action.type){
        case "showsignin":
            return{
                showsignin:true
            }
        case "showsignup":
            return{
                showsignup:true
            }
        default:
            return"Default"
    }
}

const AppProvider =({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext =()=> useContext(AppContext)

export {
    useAppContext,
    AppProvider
}