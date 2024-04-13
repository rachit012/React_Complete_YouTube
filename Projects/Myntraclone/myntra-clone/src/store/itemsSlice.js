import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemSlice= createSlice({

    name:'fetchStatus',
    initialState: DEFAULT_ITEMS,
    reducers: {
        addInitalItems: (store,action) =>{
            return store;
        }
    }
    });

    export const itemsActions = itemSlice.actions;
    export default itemSlice;

    