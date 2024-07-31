import { products, orders } from '../../data/data';

const initialState = {
    products,
    orders,
};

const rootReducer = (state = initialState, action) => {
    return state;
};

export default rootReducer;
