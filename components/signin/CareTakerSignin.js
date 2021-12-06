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
  Row,
  View,
} from "native-base";
import { useState } from "react";
import careTakerStore from "../../Store/CareTakerStore";
import guardianStore from "../../Store/GuardianStore";
import RadioButtonRN from "radio-buttons-react-native";

const Signin = ({ navigation }) => {
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
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
      await guardianStore.signin(user, navigation, toast);
    } else if (selectedradiobtn.label === "CareTaker") {
      await careTakerStore.signin(user, navigation, toast);
    }
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          We make world travel easy!
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Talk to a travel expert to find your perfect tour
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>User Name</FormControl.Label>
            <Input
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <View styles={styles.container}>
            <RadioButtonRN
              initial={1}
              box={false}
              circleSize={6}
              animationTypes={["pulse"]}
              data={data}
              selectedBtn={(e) => setSelectedradiobtn(e)}
            />
          </View>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Sign in Please
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("GuardianSignup")}
            >
              Sign up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
