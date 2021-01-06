import {combineReducers} from 'redux'
import { currentPriceReducer } from './currentPriceReducer'
import { historicalPriceReducer } from './historicalPriceReducer'

export const rootReducer = combineReducers({
    currentPriceReducer: currentPriceReducer,
    historicalPriceReducer: historicalPriceReducer
})