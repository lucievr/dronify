const initialState = {
    menu: [],
    items: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload
            }

        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu
            }

        case 'MENU_ERROR':
            return {
                ...state,
                menu: []
            }

        case 'ITEM_ADD_TO_CART':

            let newItems = {}

            const id = action.payload
            const itemIndex = state.items.findIndex(item => item.id === id)

            if (itemIndex !== -1) {

                newItems = state.items.slice()
                newItems[itemIndex].quantity++
                newItems[itemIndex].price += newItems[itemIndex].price

            } else {

                const item = state.menu.find(item => item.node.id === id)

                const newItem = {
                    id: item.node.id,
                    name: item.node.name,
                    image: item.node.localImage1.childImageSharp.fluid,
                    price: item.node.price,
                    category: item.node.category,
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

        case 'ITEM_ADD_QUANTITY':

            const idToIncrease = action.payload

            const indexToIncrease = state.items.findIndex(item => item.id === idToIncrease)

            newItems = state.items.slice()
            newItems[indexToIncrease].quantity++

            return {
                ...state,
                items: newItems
            }

        case 'ITEM_REDUCE_QUANTITY':

            const idToReduce = action.payload

            const indexToReduce = state.items.findIndex(item => item.id === idToReduce)

            newItems = state.items.slice()

            if (newItems[indexToReduce].quantity > 1) {
                newItems[indexToReduce].quantity--
            }

            return {
                ...state,
                items: newItems
            }

        case 'ITEM_REMOVE_FROM_CART':

            const idToRemove = action.payload
            const itemsLeft = state.items.filter(item => item.id !== idToRemove)

            return {
                ...state,
                items: itemsLeft
            }

        default:
            return state
    }
}

export default productReducer