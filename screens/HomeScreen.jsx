import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import {Context} from "../context/BlogContext";

export default function HomeScreen() {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(blogPosts) => blogPosts.id}
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
