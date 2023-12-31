import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function BlogPostForm({
  onSubmit,
  currentValues,
  editButton,
  saveButton,
}) {
  const [title, setTitle] = useState(currentValues ? currentValues.title : "");
  const [content, setContent] = useState(
    currentValues ? currentValues.content : ""
  );
  return (
    <View style={styles.main}>
      <Text style={styles.label}>Başlığı Giriniz:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.label}>İçeriği Giriniz:</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setContent(text)}
        value={content}
      />
      <TouchableOpacity
        onPress={() => onSubmit(title, content)}
        style={styles.buttonMain}
      >
        <View style={styles.buttonView}>
          {editButton ? (
            <Text style={styles.buttonText}>{editButton}</Text>
          ) : (
            <Text style={styles.buttonText}>{saveButton}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    padding: 5,
    fontSize: 18,
    marginBottom: 15,
  },
  buttonMain: {
    padding: 30,
  },
  buttonView: {
    backgroundColor: "green",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
