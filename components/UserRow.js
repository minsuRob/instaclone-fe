import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { colors } from "../colors";

const avatarImg = [
  "https://pbs.twimg.com/profile_images/1499021634715668480/FrKd2k3S_400x400.jpg",
  "https://i.pinimg.com/originals/77/09/3c/77093cd02b29fec0c2553adb65deec9a.jpg",
  "https://image.fmkorea.com/files/attach/new4/20240813/7357635763_4180795_a9e5433fc391a32fc367141f1ab8f69d.jpeg",
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;
const Username = styled.Text`
  font-weight: 600;
  color: white;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const FollowBtn = styled.TouchableOpacity`
  background-color: ${colors.blue};
  justify-content: center;
  padding: 5px 10px;
  border-radius: 4px;
`;

const FollowBtnText = styled.Text`
  color: white;
  font-weight: 600;
`;

export default function UserRow({ avatar, username, isFollowing, isMe }) {
  const navigation = useNavigation();
  const resultAvatar = avatarImg[getRandom(0, 2)];
  return (
    <Wrapper>
      <Column
        onPress={() =>
          navigation.navigate("Profile", {
            username,
            id,
          })
        }
      >
        <Avatar source={{ uri: resultAvatar }} />
        <Username>{username}</Username>
      </Column>
      {!isMe ? (
        <FollowBtn>
          <FollowBtnText>{isFollowing ? "Unfollow" : "Follow"}</FollowBtnText>
        </FollowBtn>
      ) : null}
    </Wrapper>
  );
}
