import React from "react";
import styled from "styled-components/native";
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
  padding: 5px 15px;
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

const Wrapper = styled.View``;
const FollowBtn = styled.TouchableOpacity``;
const FollowBtnText = styled.Text``;

export default function UserRow({ avatar, username, isFollowing, isMe }) {
  const resultAvatar = avatarImg[getRandom(0, 2)];
  return (
    <Wrapper>
      <Column>
        <Avatar source={{ uri: resultAvatar }} />
        <Username>{username}</Username>
      </Column>
    </Wrapper>
  );
}
