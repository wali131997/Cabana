
const current_state = {
    promotion:[],
    country:''
}
const reducer = (state = current_state,action) =>{
    if(action.type == 'CHANGE_PROMOTION'){
        console.log(action.payload.promotion)
        return {
            ...state,
            promotion:action.payload.promotion,
            country:action.payload.country
        }
    }
    return state;
}

export default reducer;
