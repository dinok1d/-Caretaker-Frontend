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
