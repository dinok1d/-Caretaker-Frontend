import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuDrawer from "react-native-side-drawer";
import { useState } from "react";
import { Button, HStack } from "native-base";
import { useNavigation } from "@react-navigation/core";
import careTakerStore from "../../Store/CareTakerStore";
import guardianStore from "../../Store/GuardianStore";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconProfile from "react-native-vector-icons/MaterialCommunityIcons";
import Star from "react-native-star-view";
import IconBar from "react-native-vector-icons/Ionicons";
import IconHome from "react-native-vector-icons/AntDesign";
import IconSetting from "react-native-vector-icons/Feather";
import { SocialIcon } from "react-native-elements";

import { observer } from "mobx-react";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
} from "react-native-paper";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const toggleOpen = () => {
    setOpen(!open);
  };

  drawerContent = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.drawerContent}>
          <View style={{ flexDirection: "row", marginBottom: 50 }}>
            <View style={{ marginLeft: 15, flexDirection: "column" }}></View>
          </View>

          <View style={styles.animatedBox}>
            {!guardianStore.guardian && !careTakerStore.caretaker ? (
              <View>
                <Icon
                  style={styles.drawerSection}
                  size={30}
                  name="login"
                  onPress={() => {
                    toggleOpen();
                    navigation.navigate("CareTakerSignin");
                  }}
                />

                <Text style={styles.title}>signin/up</Text>
              </View>
            ) : careTakerStore.caretaker ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    toggleOpen();
                  }}
                >
                  <Text style={styles.closing}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <IconProfile
                    style={styles.profile}
                    size={50}
                    name="account"
                    onPress={() => {
                      navigation.navigate("CareTakerProfile");
                    }}
                  />
                  {/* <Avatar.Image
                    source={{
                      uri: "data:image/jpeg;base64,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",
                    }}
                    size={50}
                  /> */}

                  {/* <Text
                    onPress={() => {
                      toggleOpen(), navigation.navigate("CareTakerProfile");
                    }}
                  >
                    CareTaker Profile
                  </Text> */}
                  <Title style={styles.title}>I am a CareTaker</Title>
                  <Caption style={styles.caption}>@Ct_CareTaker</Caption>
                  <HStack>
                    <IconHome
                      style={styles.home}
                      padding={10}
                      size={30}
                      name="home"
                      onPress={() => {
                        navigation.navigate("Home");
                      }}
                    />
                    <Text style={styles.hometext}> Home </Text>
                  </HStack>
                  <HStack>
                    <IconSetting
                      style={styles.setting}
                      padding={10}
                      size={30}
                      name="settings"
                      onPress={() => {
                        navigation.navigate("Settingss");
                      }}
                    />
                    <Text style={styles.settingtext}> Settings </Text>
                  </HStack>

                  <Star style={styles.padding} score={4.7} />
                  <HStack>
                    <SocialIcon type="twitter" />
                    <SocialIcon type="instagram" />
                  </HStack>
                  <HStack>
                    <SocialIcon type="youtube" />
                    <SocialIcon type="facebook" />
                  </HStack>
                  <HStack>
                    <SocialIcon type="github" />
                    <SocialIcon type="soundcloud" />
                  </HStack>

                  <Icon
                    style={styles.drawerSection}
                    // padding={30}
                    //   style={styles.bottomDrawerSection}
                    //   style={styles.icon}
                    size={40}
                    name="logout"
                    onPress={() => {
                      toggleOpen(), careTakerStore.logout(navigation);
                    }}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              guardianStore.guardian && (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      toggleOpen();
                    }}
                  >
                    <Text style={styles.closing}>X</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <IconProfile
                      style={styles.profile}
                      size={50}
                      name="account"
                      onPress={() => {
                        navigation.navigate("GuardianProfile");
                      }}
                    />
                    <Title style={styles.title}>I am a Guardian</Title>
                    <Caption style={styles.caption}>@G_Guardian</Caption>
                    <HStack>
                      <IconHome
                        style={styles.home}
                        padding={10}
                        size={30}
                        name="home"
                        onPress={() => {
                          navigation.navigate("Home");
                        }}
                      />
                      <Text style={styles.hometext}> Home </Text>
                    </HStack>
                    <HStack>
                      <IconSetting
                        style={styles.setting}
                        padding={10}
                        size={30}
                        name="settings"
                        onPress={() => {
                          navigation.navigate("Settingss");
                        }}
                      />
                      <Text style={styles.settingtext}> Settings </Text>
                    </HStack>
                    <Star style={styles.padding} score={2} />
                    <HStack>
                      <SocialIcon type="twitter" />
                      <SocialIcon type="instagram" />
                    </HStack>
                    <HStack>
                      <SocialIcon type="youtube" />
                      <SocialIcon type="facebook" />
                    </HStack>
                    <HStack>
                      <SocialIcon type="github" />
                      <SocialIcon type="soundcloud" />
                    </HStack>
                    <Icon
                      style={styles.drawerSection}
                      // padding={30}
                      //   style={styles.bottomDrawerSection}
                      //   style={styles.icon}
                      size={40}
                      name="logout"
                      onPress={() => {
                        toggleOpen(), guardianStore.logout(navigation);
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MenuDrawer
        open={open}
        drawerContent={drawerContent()}
        drawerPercentage={45}
        animationTime={250}
        overlay={true}
        opacity={0.4}
      >
        <IconBar
          color="white"
          margin={50}
          size={40}
          name="ios-menu"
          onPress={toggleOpen}
        />
      </MenuDrawer>
    </View>
  );
};

export default observer(Drawer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    marginTop: -4,
    marginLeft: 2,
    borderColor: "pink",
    borderRadius: 10,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F04812",
  },
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
  log: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#FA2F60",
    marginLeft: 10,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 10,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  drawerContent: {
    flex: 1,
    marginBottom: 10,
  },
  bottomDrawerSection: {
    // marginBottom: 200,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  drawerSection: {
    marginTop: 150,
    // marginBottom: 400,
    marginLeft: 15,
    color: "#FA2F60",
  },
  starStyle: {
    width: 20,
    height: 20,
    marginBottom: 20,
  },
  profile: {
    color: "#FA2F60",
    marginLeft: 40,
    marginTop: 40,
  },
  home: {
    color: "#FA2F60",
    marginBottom: 10,
    marginTop: 15,
    paddingTop: 10,
  },
  hometext: {
    marginTop: 20,
    color: "#929292",
    marginLeft: 25,
    paddingTop: 10,
  },
  setting: {
    color: "#FA2F60",
    marginBottom: -20,
    marginTop: 15,
    paddingTop: 10,
  },
  settingtext: {
    marginTop: 20,
    color: "#929292",
    marginLeft: 25,
    paddingTop: 10,
  },
  padding: {
    marginTop: 40,
  },
  closing: {
    fontSize: 20,
    color: "#929292",
    paddingTop: 10,
  },
  signin: {
    color: "#FA2F60",
  },
});
