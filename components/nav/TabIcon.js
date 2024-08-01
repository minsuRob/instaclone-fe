import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabIcon({ icoName, color, focused }) {
  return (
    <Ionicons
      name={focused ? icoName : `${icoName}-outline`}
      color={color}
      size={22}
    />
  );
}
