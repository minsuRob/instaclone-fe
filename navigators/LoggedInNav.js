import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Camera from "../screens/Camera";
import Me from "../screens/Me";
import StackNavFactory from "../components/nav/StackNavFactory";

import { Ionicons } from "@expo/vector-icons";
import TabIcon, { View } from "../components/nav/TabIcon";
const Tabs = createBottomTabNavigator();

export default function LoggedInNav(params) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"home"} color={color} size={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"search"} color={color} size={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"camera"} color={color} size={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="camera" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"heart"} color={color} size={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Notifications" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"person"} color={color} size={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
