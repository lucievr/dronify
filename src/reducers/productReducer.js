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

            } else {

                const item = state.menu.find(item => item.node.id === id)
                console.log(item)

                const newItem = {
                    id: item.node.id,
                    name: item.node.name,
                    image: item.node.localImage.childImageSharp.fluid,
                    price: item.node.price,
                    category: item.node.category,
                    quantity: 1
                }

                console.log(state.items)

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

export default productReducer