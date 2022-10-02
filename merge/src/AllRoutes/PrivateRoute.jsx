import React, {  useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../AuthContext/AuthContextProvider";
// import {AppContext} from "../Context/AuthContext/AuthContextProvider"


const PrivateRoute = ({children}) => {
 const {state} = useContext(AppContext)
 
 if( !state.isAuth){
   return  <Navigate  to="/Sign" />
 }

return children
};

export default PrivateRoute;
