import { createStore as reduxCreateStore } from "redux"
import productReducer from '../reducers/productReducer'

const createStore = () => reduxCreateStore(productReducer)
export default createStore
