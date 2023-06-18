import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: ['ALI', 'Sami'],
        message: '',
    },
    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;