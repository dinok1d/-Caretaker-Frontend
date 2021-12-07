import { Button } from "native-base";
import React from "react";
import { StyleSheet, View, TextInput, SafeAreaView } from "react-native";
import guardianStore from "../../../Store/GuardianStore";
// import { baseURL } from "../../../Store/instance";

const GuardianProfileList = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="first name"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="last name"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Number Of Kids"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="bio"
        />

        <Button marginTop="10" marginBottom="10">
          edit profile
        </Button>

        <Button onPress={() => guardianStore.logout()}>logout</Button>
      </View>
    </SafeAreaView>
  );
};

export default GuardianProfileList;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
