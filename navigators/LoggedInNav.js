import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Camera from "../screens/Camera";
import Me from "../screens/Me";
import SharedStackNav from "./SharedStackNav";

import { Ionicons } from "@expo/vector-icons";
import TabIcon, { View } from "../components/nav/TabIcon";
const Tabs = createBottomTabNavigator();

export default function LoggedInNav(params) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Feed"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"home"} color={color} size={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"search"} color={color} size={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"camera"} color={color} size={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="camera" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"heart"} color={color} size={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Notifications" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"person"} color={color} size={focused} />
          ),
        }}
      >
        {() => <SharedStackNav screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
