import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditBlogScreen({ route, navigation }) {

  const { state, editBlogPost } = useContext(Context);
  const id = route.params.id

  //   console.log(route.params.id);
  const blogPost = state.find((blogItem) => blogItem.id === route.params.id);

  const handleSubmit = (title, content, id) => {
    editBlogPost(title, content, id);
    navigation.navigate("Home");
  };

  return (
    <BlogPostForm
      currentValues={{id, title: blogPost.title, content: blogPost.content }}
      editButton="Güncelle"
      onSubmit={(title, content ) => handleSubmit(title, content, id)}
    />
  );
}

const styles = StyleSheet.create({});
