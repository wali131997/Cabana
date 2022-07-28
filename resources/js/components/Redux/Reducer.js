
const current_state = {
    promotion:[],
    country:'',
    account_type:'s'
}
const reducer = (state = current_state,action) =>{
    if(action.type == 'CHANGE_PROMOTION'){
        console.log(action.payload.promotion)
        return {
            ...state,
            promotion:action.payload.promotion,
            country:action.payload.country
        }
    }else  if(action.type == 'CHANGE_ACCOUNT_TYPE'){
        console.log(action.payload)
        return {
            ...state,
            account_type:action.payload,
        }
    }
    return state;
}

export default reducer;
