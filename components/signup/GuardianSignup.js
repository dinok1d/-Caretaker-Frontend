import React from "react";
import { StyleSheet } from "react-native";

import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  useToast,
  View,
  Image,
} from "native-base";
import { useState } from "react";
import RadioButtonRN from "radio-buttons-react-native";
import guardianStore from "../../Store/GuardianStore";
import careTakerStore from "../../Store/CareTakerStore";

const Signup = ({ navigation }) => {
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [selectedradiobtn, setSelectedradiobtn] = useState({
    label: "Guardian",
  });
  const data = [
    {
      label: "Guardian",
    },
    {
      label: "CareTaker",
    },
  ];

  const handleSubmit = async () => {
    if (selectedradiobtn.label === "Guardian") {
      await guardianStore.signup(user, navigation, toast);
    } else if (selectedradiobtn.label === "CareTaker") {
      await careTakerStore.signup(user, navigation, toast);
    }
  };

  return (
    <Center flex={1} px="3">
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            marginBottom: 2,
          }}
          source={require("../../assets/H.jpg")}
        />
      </View>
      <Heading size="lg" fontWeight="600" color="#FA2F60" alignContent="center">
        Haven
      </Heading>

      <Heading
        mt="1"
        color="#8285E0"
        fontWeight="medium"
        size="xs"
        marginBottom="4"
      >
        Join us now as a Guardian or a Caretaker!
      </Heading>

      <HStack>
        <RadioButtonRN
          initial={1}
          box={false}
          circleSize={7}
          animationTypes={["pulse"]}
          data={data}
          selectedBtn={(e) => setSelectedradiobtn(e)}
          style={{
            width: 100,
            height: 50,
          }}
        />
      </HStack>
      <Box safeArea p="1" py="1" w="90%" maxW="290">
        <HStack space={3} mt="5">
          <FormControl
            style={{
              width: 135,
            }}
          >
            <FormControl.Label>User Name</FormControl.Label>
            <Input
              style={{
                borderColor: "#8285E0",
                height: 32,
              }}
              onChangeText={(username) => setUser({ ...user, username })}
              placeholder={"Username"}
            />
          </FormControl>
          <FormControl
            style={{
              width: 130,
            }}
          >
            <FormControl.Label>Password</FormControl.Label>
            <Input
              style={{
                borderColor: "#8285E0",
                height: 33,
              }}
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
              placeholder={"Password"}
            />
          </FormControl>
        </HStack>

        <FormControl
          style={{
            marginTop: 10,
          }}
        >
          <FormControl.Label>Email ID</FormControl.Label>
          <Input
            style={{
              borderColor: "#8285E0",
              height: 35,
            }}
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder={"Email"}
          />
        </FormControl>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            Already have an account?
          </Text>

          <Link
            _text={{
              color: "#FA2F60",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            onPress={() => navigation.navigate("CareTakerSignin")}
          >
            {""} Sign in
          </Link>
        </HStack>

        <Button mt="5" colorScheme="indigo" onPress={handleSubmit}>
          Sign up
        </Button>

        <Button
          backgroundColor="#FA2F60"
          marginTop="2"
          onPress={() => navigation.navigate("CaretakerList")}
        >
          Continue As a Guest
        </Button>
      </Box>
    </Center>
  );
};

export default Signup;

const styles = StyleSheet.create({});
