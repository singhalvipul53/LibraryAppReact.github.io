import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    
    book:[],
  },
  reducers: {
    addtoBasket: (state,action) => {
        state.book = [...state.book,action.payload];
    },
    removefromBasket: (state,action) => {
        console.log(action.payload.id)
      const index=state.book.findIndex(
          (bookitem)=>bookitem.id===action.payload.id
      )
      console.log(index)
      let newBook=[...state.book]
      if(index>=0){
          newBook.splice(index,1)
      } else{
          console.warn(
              `Cant remove product`
          )
      }
      return{
          ...state,
          book:newBook
      }
    },
    
  },
});

export const { addtoBasket,removefromBasket } = bookSlice.actions;

export const selectBook = state => state.book.book;

export default bookSlice.reducer;
