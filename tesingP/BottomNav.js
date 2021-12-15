import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { observer } from "mobx-react";
import { useState } from "react";
import careTakerStore from "../Store/CareTakerStore";
import guardianStore from "../Store/GuardianStore";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
const BottomNav = ({ navigation }) => {
  const [selected, setSelected] = React.useState(1);
  const [query, setQuery] = useState("");

  return (
    <Box marginTop={680}>
      <Center flex={1}></Center>
      <HStack bg="#8285E0" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            careTakerStore.logout(navigation);
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="logout" />}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              logout
            </Text>
            {/* <Input
              placeholder="Search .."
              onChangeText={(value) => setQuery({ ...query, title: value })}
            /> */}
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => {
            navigation.navigate("AppointmentList");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? "appointments" : "cart-outline"}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" font="12">
              appointments
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.navigate("CareTakerProfile");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Profile
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};
export default observer(BottomNav);
