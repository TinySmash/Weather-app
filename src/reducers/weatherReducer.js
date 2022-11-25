const initialState = {
    
};

export default function( state = initialState, action ){

    switch(action.type){
        case 'GET_WEATHER': 
            return{
                ...state, 
                weather : action.payload
            }
        default :
            return state;
    }

}