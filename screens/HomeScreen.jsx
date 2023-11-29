import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(blogPosts) => blogPosts.id}
        data={state}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <MaterialIcons name="delete-forever" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
});
