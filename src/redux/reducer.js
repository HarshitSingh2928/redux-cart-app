const initialState={
    totalPrice:90000,
    totalQuantity:1
}
const addItemReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_ITEM": return {
            ...state,
            totalQuantity:state.totalQuantity+1,
            totalPrice:state.totalPrice+90000
        }
        case "DEL_ITEM": return {
            ...state,
            totalQuantity:state.totalQuantity-1,
            totalPrice:state.totalPrice-90000
        }
        default : return state
    }
}
export default addItemReducer;