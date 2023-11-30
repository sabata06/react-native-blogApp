import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CreateBlogScreen from "./screens/CreateBlogScreen";
import { Provider } from "./context/BlogContext";
import PostDetailScreen from "./screens/PostDetailScreen";
import { AntDesign } from "@expo/vector-icons";
import EditBlogScreen from "./screens/EditBlogScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blog App" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateBlogScreen} />
          <Stack.Screen
            name="PostDetail"
            component={PostDetailScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: route.params.id})}>
                  <AntDesign name="edit" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Edit" component={EditBlogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
