import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

export default function CreateBlogScreen({ navigation }) {

  const { addBlogPost } = useContext(Context);

  const handleSubmit = (title, content) => {
    addBlogPost(title, content);
    navigation.navigate("Home");
  };
  
  return (
    <BlogPostForm
      onSubmit={(title, content) => handleSubmit(title, content)}
      saveButton="Kaydet"
    />
  );
}

const styles = StyleSheet.create({});
