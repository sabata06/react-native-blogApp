import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function HomeScreen() {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(blogPosts) => blogPosts.id}
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
