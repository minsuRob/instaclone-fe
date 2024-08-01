import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Camera from "../screens/Camera";

import { Ionicons } from "@expo/vector-icons";
import TabIcon, { View } from "../components/nav/TabIcon";
const Tabs = createBottomTabNavigator();

export default function LoggedInNav(params) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"home"} color={color} size={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"search"} color={color} size={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"camera"} color={color} size={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"heart"} color={color} size={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon icoName={"person"} color={color} size={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
