import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

import {} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ScreenLayout from "../components/ScreenLayout";
import Photo from "../components/Photo";

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
      isLiked
      user {
        username
      }
    }
  }
`;
export default function Feed({}) {
  const { data, loading, error } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    // console.log(photo);
    return <Photo {...photo} />;
  };

  return (
    <ScreenLayout>
      <FlatList
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
