import CART from "./constant";

const initialState = {
    items: [],
    total: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case CART.ADD_ITEM:
            const updated = addNewItem(state.items, action.payload)
            return {
                ...state,
                items: updated,
                total: updated.reduce((acc, item)=> acc + (item.count * item.price), 0).toFixed(2)
            }
        case CART.REMOVE_ITEM:
            const updatedItem = state.items.filter(item => item.id !== action.payload.id )
            console.log(updatedItem);
            return { ...state, items: updatedItem, total: updatedItem.reduce((accu, item)=> accu + (item.count * item.price), 0).toFixed(2)}
        case CART.REMOVE_SINGLE_ITEM:
            const removedItem = removeItem(state.items, action.payload)
            console.log(removedItem);
            
            return {...state, items: removedItem, total: removedItem.reduce((acc, item)=> acc + (item.count * item.price), 0).toFixed(2)}
        case CART.CLEAR_ITEM:
            return initialState
        default:
            return state
    }
}

const addNewItem = (items, payload)=>{
    const check = items.find(item => item.id === payload.id)

    if (check) {
        return items.map(item=>{
            if (item.id === payload.id) {
                return {...item , count:  item.count + 1}
            }else{
                return item
            }
        })
    }else{
        return [...items, {...payload, count: 1}]
    }
}

const removeItem = (items, payload)=>{
    const check = items.find(item => item.id ===  payload.id)

    if (check) {
        return items.map((item)=>{
            if (item.id === payload.id) {
                return {...item, count: item.count - 1}
            } else {
                return item
            }
        }).filter(item => item.count > 0)
    }else{
        return items
    }
}

export { initialState, cartReducer }