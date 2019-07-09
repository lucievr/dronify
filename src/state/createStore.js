import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
    switch (action.type) {
        case 'ITEM_ADD_TO_CART':

            let newItems = {}

            const id = action.payload
            const itemIndex = state.items.findIndex(item => item.id === id)

            if (itemIndex !== -1) {

                newItems = state.items.slice()
                newItems[itemIndex].quantity++

            } else {

                const item = state.menu.find(item => item.id === id)

                const newItem = {
                    id: item.id,
                    url: item.url,
                    title: item.title,
                    price: item.price,
                    quantity: 1
                }

                newItems = [
                    ...state.items,
                    newItem
                ]
            }

            return {
                ...state,
                items: newItems
            }

        case 'ITEM_REMOVE_FROM_CART':

            const indexToRemove = action.payload
            const itemsLeft = state.items.filter(item => item.id !== indexToRemove)

            return {
                ...state,
                items: itemsLeft
            }

        default:
            return state
    }
}

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore