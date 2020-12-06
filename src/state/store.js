import { createStore as reduxCreateStore } from "redux"
import productReducer, { initialState } from '../reducers/productReducer'

const createStore = () => reduxCreateStore(productReducer, initialState)
export default createStore
