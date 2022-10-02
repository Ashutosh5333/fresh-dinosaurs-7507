
// reducer related to auth state;
export const reducer = (state,action)=> {
     
    switch(action.type){
        case "ADD_TO_CART":{
            return[ 
                ...state,
               action.payload
            ]
        }
        
        case 'REMOVEFROMCART' : {
           const cartafteritemremovel=state.filter(
            (item)=> item.id != action.payload
           )
           return cartafteritemremovel
        }
        case "CHECKOUT": {
            return [];
        }
        default :{
            return state;
        }
    }
    
} 

