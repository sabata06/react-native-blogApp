import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

export default function PostDetailScreen({route}) {
  const { state } = useContext(Context);
  console.log(route.params.id);
  const blogPost = state.find((blogItem) => blogItem.id === route.params.id)
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
