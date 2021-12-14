import React from "react";
import { StyleSheet } from "react-native";
import {
  Box,
  Text,
  Heading,
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
import careTakerStore from "../../Store/CareTakerStore";
import guardianStore from "../../Store/GuardianStore";
import RadioButtonRN from "radio-buttons-react-native";
import { LinearGradient } from "expo-linear-gradient";

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

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const handleSubmit = async () => {
    if (selectedradiobtn.label === "Guardian") {
      await guardianStore.signin(user, navigation, toast);
    } else if (selectedradiobtn.label === "CareTaker") {
      await careTakerStore.signin(user, navigation, toast);
    }
  };

  return (
    <Center
      flex={1}
      px="3"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
      }}
    >
      <LinearGradient
        colors={["#C0D6F9", "transparent"]}
        locations={[0.2, 0.2]}
        style={styles.background}
      />
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            marginBottom: 2,
          }}
          source={require("../../assets/H.jpg")} alt="Logo"
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
        <FormControl>
          <FormControl.Label>Username</FormControl.Label>
          <Input
            style={{ borderColor: "#8285E0", height: 36 }}
            onChangeText={(username) => setUser({ ...user, username })}
            placeholder={"Username"}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>

          <Input
            variant="outline"
            style={{
              borderColor: "#8285E0",

              height: 40,
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Button
                size="xs"
                w="1/6"
                h="full"
                onPress={handleClick}
                style={{
                  backgroundColor: "#FA2F60",
                }}
              >
                {show ? "Hide" : "Show"}
              </Button>
            }
            onChangeText={(password) => setUser({ ...user, password })}
            placeholder={"Password"}
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
            Register with us now!
          </Text>

          <Link
            _text={{
              color: "#FA2F60",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            onPress={() => navigation.navigate("GuardianSignup")}
          >
            {""} Sign up
          </Link>
        </HStack>

        <Button mt="5" colorScheme="indigo" onPress={handleSubmit}>
          Sign in
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

export default Signin;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  background: {
    position: "absolute",

    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
