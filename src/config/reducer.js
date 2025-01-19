import CART from "./constant";

const initialState = {
    items: [],
    total: 0
}

const cartReducer = (state, action)=>{
    switch (action.type) {
        case CART.ADD_ITEM:
            return {...state, items: [...state.items, action.payload], total: [state.total + action.payload.price]}
        case CART.REMOVE_ITEM:
            const updatedItem = state.items.find(item => action.payload.id !== item)
            return {...state, items: updatedItem, total: state.total - action.payload.price}
        case CART.CLEAR_ITEM:
            return initialState
        default:
            return state
    }
}

export {initialState, cartReducer}