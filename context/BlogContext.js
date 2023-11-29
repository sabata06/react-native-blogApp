import { React, createContext, useState, useReducer } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const blogReducer = (state, action) => {
    switch (action.type) {
      case "add_blogPost":
        return [...state, { title: "Vue JS", id: 4 }];
      default:
        return state;
    }
  };

  const [blogPosts, dispatch] = useReducer(blogReducer, [
    { title: "React Native", id: 1 },
    { title: "JavaScript", id: 2 },
  ]);

  const addBlogPost = () => {
    dispatch({type:"add_blogPost"})
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
