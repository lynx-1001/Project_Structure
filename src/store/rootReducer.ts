"use client";
import { combineSlices } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
export interface LazyLoadedSlices {}


// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
export const rootReducer = combineSlices(
  userSlice
  ).withLazyLoadedSlices<LazyLoadedSlices>();
  
  export default rootReducer;
