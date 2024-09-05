import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddEmpolyee = () => {
  const [data, setData] = useState([]);
  const {register , handleSubmit , setValue , reset} = useForm("");

  // console.log(name);

  const onSubmit = useCallback(formData => {
    console.log(formData);
    setData((prev) => [...prev , formData])
    reset()
  }, [setData , reset]);

  useEffect(()=> {
    register("empName")
    register("empEmail")
    register("position")
  }, [register])

  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );

  console.log(data , "this is data")

  return (
    <View>
      <Text>Hey welcome buddies , Here add Your details</Text>
      <TextInput
        placeholder="Email"
        onChangeText={onChangeField('empEmail')}
        style = {styles.input}
      /> 
      <TextInput
        placeholder="Name"
        onChangeText={onChangeField('empName')}
        style = {styles.input}
      />
      <TextInput
        placeholder="Position"
        onChangeText={onChangeField('position')}
        style = {styles.input}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      <ScrollView alwaysBounceVertical = {false}>
          {data?.map((each , index) => (
            <View key={index} style = {styles.itemContainer}>
                <Text>{each?.empName}</Text>
                <Text>{each?.empEmail}</Text>
                <Text>{each?.position}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default AddEmpolyee;

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
    width: 300,
    margin: "auto",
    borderWidth: 1,
    borderStyle: "solid",
    height: 48,
    borderColor: "#000",
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    marginTop: 2,
    // paddingLeft: 10,
  },
  label: {
    marginTop: 3,
    marginLeft: 3,
    marginBottom: 2,
    fontWeight: "700",
  },
  itemContainer : {
      backgroundColor : "#864357",
      backgroundSize : "cover",
      width : "80%"
  }
});



// import React, { useEffect, useCallback } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import { useForm } from 'react-hook-form';

// const InscriptionScreen = () => {
//   const { register, handleSubmit, setValue } = useForm();
//   const onSubmit = useCallback(formData => {
//     console.log(formData);
//   }, []);
//   const onChangeField = useCallback(
//     name => text => {
//       setValue(name, text);
//     },
//     []
//   );

//   useEffect(() => {
//     register('email');
//     register('password');
//   }, [register]);

//   return (
//     <View>
//       <TextInput
//         autoCompleteType="email"
//         keyboardType="email-address"
//         textContentType="emailAddress"
//         placeholder="Email"
//         onChangeText={onChangeField('email')}
//       />
//       <TextInput
//         secureTextEntry
//         autoCompleteType="password"
//         placeholder="Password"
//         onChangeText={onChangeField('password')}
//       />
//       <Button title="Submit" onPress={handleSubmit(onSubmit)} />
//     </View>
//   );
// };

// export default InscriptionScreen;