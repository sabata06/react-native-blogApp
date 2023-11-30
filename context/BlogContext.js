import { React, useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "edit_blogPost":
      return state.map((blogpost) => {
        return blogpost.id === action.payload.id ? action.payload : blogpost;
      });

    case "get_blogPosts":
      return action.payload;

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content) => {
    // dispatch({ type: "add_blogPost", payload: { title, content } });
    await jsonServer.post("/blogposts", { title, content });
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogPost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return async (title, content, id) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogPost", payload: { title, content, id } });
  };
};
const getBlogPosts = (dispatch) => {
  return async () => {
    const { data } = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogPosts", payload: data });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
