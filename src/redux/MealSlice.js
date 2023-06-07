import { createSlice } from "@reduxjs/toolkit";
const MealSlice=createSlice({
    name:'meal',
    initialState:[],
    reducers:{
        AddFav(state,action){
            state.push(action.payload);
            
        },
        RemoveFav(state,action){
          state.splice(action.payload,1);
        },
        ViewFav(state,action){
            while(state.length){
                state.pop();
            }
            state.push(action.payload);
        }

    }
})
export const {AddFav,RemoveFav,ViewFav}=MealSlice.actions
export default MealSlice.reducer;