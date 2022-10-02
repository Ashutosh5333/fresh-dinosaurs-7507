import React, {useReducer } from "react";
import { reducer } from "./reducer";
import { createContext } from "react";
import axios from "axios"

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state; it goes without saying; you are expected to use useReducer as state management tool; (hint : different actions that you are expected to have can be login - loading, success, failure ..)
// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

export const AppContext = createContext();

const initstate= {isAuth:false , token:null, isError:false, isLoading:false,data:[], isDataLoding:false }

const AuthContextProvider = ({children}) => {
  const [state ,dispatch] = useReducer(reducer, initstate);

   
 let handleDelete = (id)=> {
  axios.delete(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?${id}`)

}
  
  return <>
         <AppContext.Provider value={{state,dispatch ,handleDelete }}>
              {children}
         </AppContext.Provider>
  </>
};

export default AuthContextProvider;
