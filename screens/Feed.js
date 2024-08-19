import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

import {} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ScreenLayout from "../components/ScreenLayout";

// const FEED_QUERY = gql`
//   query seeFeed {
//     seeFeed {
//       ...PhotoFragment
//       user {
//         username
//         avatar
//       }
//       caption
//       comments {
//         ...CommentFragment
//       }
//       createdAt
//       isMine
//     }
//   }
//   ${PHOTO_FRAGMENT}
//   ${COMMENT_FRAGMENT}
// `;
const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      caption
      id
      likes
      isMine
    }
  }
`;
export default function Feed({}) {
  const { data, loading, error } = useQuery(FEED_QUERY);
  console.log(data);
  const renderPhoto = ({ item: photo }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}>{photo.caption}</Text>
      </View>
    );
  };

  return (
    <ScreenLayout>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
