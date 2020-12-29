import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Position {
    productId: number,
    quantity: number
}

type CartState = {
    positions: Position[]
}

const add: CaseReducer<CartState, PayloadAction<number>> = (state, action) => {
    if (state.positions.some(position => position.productId === action.payload)) {
      state.positions
            .filter(position => position.productId === action.payload)
            .map(position => position.quantity++);
    } else {
       state.positions.push({productId: action.payload, quantity: 1});
    }
};

const remove: CaseReducer<CartState, PayloadAction<number>> = (state, action) => {
    state.positions
        .filter(position => position.productId === action.payload)
        .map(position => position.quantity--);
};

const removeAll: CaseReducer<CartState, PayloadAction<number>> = (state, action) => {
    //TODO:debug
    state.positions= state.positions
        .filter(position => position.productId !== action.payload);
};

const clean: CaseReducer<CartState> = (state) => {
    state.positions = [];
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: { positions:[] } as CartState,
    reducers: {
        add,
        remove,
        removeAll,
        clean
    }
});

export default cartSlice;