const initialstate=[];

export default function cartReducer(state=initialstate,action){
    const {type,payload}=action;
    switch(type){
        case'ADD_TO_CART':
            // return [...state,payload];
            // default: return state;
            if(payload.inStock!==0){
                return [...state,payload];
            }
            else{
                return state
            }
        default:return state;
    }
}

export function addToCart(product){
    return{
        type:'ADD_TO_CART',
        payload:product
    }
}