import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), ...action.payload });
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addItem, deleteItem, updateItem } = crudSlice.actions;
export default crudSlice.reducer;