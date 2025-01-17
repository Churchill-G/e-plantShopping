import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        //console.log('Current items:', state.items);
        //console.log('Payload:', action.payload);
        const addedToCart = state.items.find(item => item.name === name);
        if (addedToCart) {
            addedToCart.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      }, //added by me in task 2 code from guide.

    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    }, //added by me from task 2 remove item reducer step

    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        }
    
    },  //added by me form step 2 update quantity sample code
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
