
// reducer related to auth state;
export const reducer = (state,action)=> {
     
    switch(action.type){
        case "LOGIN_REQUEST":{
            return{
                ...state,
                isLoading:true
            }
        }
        case "LOGIN_SUCCESS": 
        return{
          ...state,
          token:action.payload,
          isAuth:true
        }
       
        case "LOGIN_FAILURE":{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        
        case 'GET_PRODUCTS_SUCCESS' : {
            return {...state,
                data:action.payload
            }
        }
            
    }
    
} 

