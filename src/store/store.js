import { combineReducers } from 'redux';
import { orderReducer, productReducer, ProductListReducer } from './reducers';

const rootReducer = combineReducers({
    orderReducer,
    productReducer,
    ProductListReducer,
});

export default rootReducer;
