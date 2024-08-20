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
  query seeFeed($offset: Int!) {
    seeFeed(offset: $offset) {
      caption
      id
      likes
      isMine
      isLiked
      user {
        id
        username
      }
    }
  }
`;
export default function Feed({}) {
  const { data, loading, error, refetch, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      offset: 0,
    },
  });
  const renderPhoto = ({ item: photo }) => {
    // console.log(photo);
    return <Photo {...photo} />;
  };

  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <ScreenLayout>
      <FlatList
        onEndReachedThreshold={0.02}
        onEndReached={() =>
          fetchMore({ variables: { offset: data?.seeFeed?.length } })
        }
        refreshing={refreshing}
        onRefresh={refresh}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
