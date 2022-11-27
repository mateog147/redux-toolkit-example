import {createSlice, PayloadAction} from '@reduxjs/toolkit';
//un slice es solo una parte de nuestro store: una rebana del pastel completo
const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Initial message',
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;

/* Si no usamos redux toolkit entonces deberiamos setear el reduce a mano ej: */
