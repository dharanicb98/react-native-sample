import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddEmpolyee from "./pages/addEmpolyee";
// import Login from "./App/Screens/LoginScreen";
// import Profile from "./App/Screens/ProfileScreen";
// import Home from "./App/Screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello react native i am here!</Text> */}
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Home /> */}
      <AddEmpolyee />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 40,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
