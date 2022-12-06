import { createSlice } from "@reduxjs/toolkit";
import products from "../api/products.json";
const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  searching: "",
  searchData: products,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.cartList.find(
        (item) => item.id === action.payload.id
      );

      if (itemExist) {
        state.cartList.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count = 1;
          }
        });
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
      }
    },
    reset: (state) => {
      state.cartList = [];
    },
    increment: (state, action) => {
      const productID = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === productID) {
          item.count++;
        }
      });
    },
    deleteItem: (state, action) => {
      // console.log("State delete == ", action);
      const productID = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== productID);
    },
    decrement: (state, action) => {
      const productID = action.payload;
      const exist = state.cartList.find((item) => item.id === productID);

      if (exist.count === 1) {
        state.cartList = state.cartList.filter((item) => item.id !== productID);
      } else {
        state.cartList.forEach((item) => {
          if (item.id === productID) {
            item.count--;
          }
        });
      }
    },
    search: (state, action) => {
      state.searching = action.payload;
    },
    filterAndSearch: (state, action) => {
      state.searchData = products.filter((item) => {
        return (
          action.payload === "" && item,
          item.title
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        );
      });
    },
  },
});

export const {
  addToCart,
  increment,
  decrement,
  reset,
  deleteItem,
  search,
  filterAndSearch,
} = cartSlice.actions;
export default cartSlice.reducer;
// 1.Provider
// 2.Store
// 3.Reucer
// 4.Action

// Store
// Action = Button Click
// Reducer => State Update
// Provider =>React
