import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show , setShow] = useState(false);
const [userData , setUserData] = useState({});

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../../../assets/HynivaLogo.png")}
          style={styles.logo}
        />
        <Text>Hey Dharani, please login</Text>
        <Text
          style={[styles.label, styles.labelName]}
          aria-label="Label for Username"
          nativeID="labelUsername"
        >
          Username
        </Text>
        <TextInput
          textContentType="username"
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.input}
          aria-label="input"
          aria-labelledby="labelUsername"
        />
        <Text
          style={styles.label}
          aria-label="Label for Email"
          nativeID="labelEmail"
        >
          Email
        </Text>
        <TextInput
          textContentType="emailAddress"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
          aria-label="input"
          aria-labelledby="labelEmail"
        />
        <Text
          style={styles.label}
          aria-label="Label for Password"
          nativeID="labelPassword"
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          aria-label="input"
          aria-labelledby="labelPassword"
        />
        <Button
          onPress={() => {
            setShow(prev => !prev)
            // setName("")
            // setPassword("")
            // setEmail("")
          }}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {show && <Text>{`${name}, ${email}, ${password}`}</Text>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    textAlign: "center",
    margin: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    width: "100%",
    margin: "auto",
    borderWidth: 1,
    borderStyle: "solid",
    height: 48,
    borderColor: "#000",
    marginBottom: 15,
    borderRadius: 15,
    paddingLeft: 10, 
  },
  label: {
    marginTop: 3,
    marginLeft: 3,
    marginBottom: 2,
    fontWeight: "700",
  },
});
