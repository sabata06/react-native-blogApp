import { React, useState, useReducer } from "react";
import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: "Angular JS", id:Math.floor( Math.random()*9999) }];
    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload )
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogPost" });
  };
};
const deleteBlogPost = (dispatch) =>{
    return (id) => {
        dispatch({ type: "delete_blogPost", payload: id });
      };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
