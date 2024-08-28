import { configureStore ,createSlice} from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'count',
    initialState:{count:0},
    reducers:{
        increment(state,action){
            state.count++
        },
        decrement(state,action){
            state.count--
        },
        add(state,action){
            state.count+=action.payload
        }
    }
})

export const actions=counterSlice.actions

const store=configureStore({
    reducer:counterSlice.reducer
})

export default store