import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;
export default function Feed({ navigation }) {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);

  return (
    <View
      style={{
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("camera")}>
        <Text style={{ color: "white" }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
}
