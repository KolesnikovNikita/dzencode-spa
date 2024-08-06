import { products, orders } from '../../data/data';

const initialState = {
    products,
    orders,
};

export const orderReducer = (state = initialState.orders, action) => {
    switch (action.type) {
        case 'DELETE_FROM_ORDERS':
            return state.filter((order) => order.id != action.orderId);
        default:
            return state;
    }
};

export const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case 'DELETE_FROM_ORDERS':
            return state.filter((product) => product.id != action.orderId);
        default:
            return state;
    }
};

export const ProductListReducer = (state = initialState.products) => {
    return state;
};
