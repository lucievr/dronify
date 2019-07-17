const initialState = {
    menu: [],
    items: [],
    item: null
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

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: []
            }

        case 'SHOW_ITEM':

            const idToShow = action.payload
            const itemToShow = state.menu.find(item => item.node.id === idToShow)

            const newItemToShow = {
                id: itemToShow.node.id,
                name: itemToShow.node.name,
                description: itemToShow.node.description,
                price: itemToShow.node.price,
                category: itemToShow.node.category,
                icon1: itemToShow.node.icon1,
                icon2: itemToShow.node.icon2,
                icon3: itemToShow.node.icon3,
                icon4: itemToShow.node.icon4,
                icon5: itemToShow.node.icon5,
                icon6: itemToShow.node.icon6,
                spec1: itemToShow.node.spec1,
                spec2: itemToShow.node.spec2,
                spec3: itemToShow.node.spec3,
                spec4: itemToShow.node.spec5,
                spec5: itemToShow.node.spec5,
                spec6: itemToShow.node.spec6,
                localImage1: itemToShow.node.localImage1.childImageSharp.fluid,
                localImage2: itemToShow.node.localImage2.childImageSharp.fluid,
                localImage3: itemToShow.node.localImage3.childImageSharp.fluid,
                localImage4: itemToShow.node.localImage4.childImageSharp.fluid
            }

            return {
                ...state,
                item: newItemToShow
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

        case 'ITEM_INCREASE_QUANTITY':

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