
const current_state = {
    promotion:[],
}
const reducer = (state = current_state,action) =>{
    if(action.type == 'CHANGE_PROMOTION'){
        console.log(action.payload)
        return {
            ...state,
            promotion:action.payload
        }
    }
    return state;
}

export default reducer;
