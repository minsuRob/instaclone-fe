import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Image, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View``;
const Header = styled.View`
  padding: 10px;
  align-items: center;
  flex-direction: row;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
`;
const Likes = styled.Text`
  color: white;
  margin: 7px 0px;
  font-weight: 600;
`;

const ExtraContainer = styled.View`
  padding: 10px;
`;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const imgfile = [
  "https://mblogthumb-phinf.pstatic.net/MjAxOTA2MjFfMTEx/MDAxNTYxMTE0NDU5OTkw._TxFSatnhvpdHI3ZLQFNTkLyfEGdCTNuEcnOaHS5ZJQg.6UVqA4YSwYlOhWf35cAjB9Ftk1V-cft97QKWdnEYqEEg.JPEG.rollermaster7/%EC%98%88%ED%8B%B0%EC%BA%A1%EC%B3%90_(159).jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MzBfMjQ5/MDAxNTU5MTQ4ODc3NTIy.YfXmYSDT1sCIlxypqOk-U_Os8gXeIxKuy2Pd8ofvAYAg.lPDUrs-pLUc7Jd2H5HL1fhVSCp3v9k0plOI2lNJx4Aog.JPEG.rollermaster7/%EC%98%88%ED%8B%B0%EC%BA%A1%EC%B3%90_(39).jpg?type=w800",
  "https://photo.newsen.com/news_photo/2021/03/17/202103171028406210_1.jpg",
  "https://image.aladin.co.kr/product/29037/28/letslook/K882836839_t13.jpg",
  "https://image.aladin.co.kr/product/29037/28/letslook/K882836839_t13.jpg",
  "https://blog.kakaocdn.net/dn/ddqGtf/btrE8NOhthb/Hn6hui0eNIkTU9fah9lurk/img.png",
];

const avatarImg = [
  "https://pbs.twimg.com/profile_images/1499021634715668480/FrKd2k3S_400x400.jpg",
  "https://i.pinimg.com/originals/77/09/3c/77093cd02b29fec0c2553adb65deec9a.jpg",
  "https://image.fmkorea.com/files/attach/new4/20240813/7357635763_4180795_a9e5433fc391a32fc367141f1ab8f69d.jpeg",
];

function Photo({ id, user, caption, file, isLiked, likes }) {
  const resultimg = imgfile[getRandom(0, 5)];
  const resultAvatar = avatarImg[getRandom(0, 2)];
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const [imageHeight, setImageHeight] = useState(height - 450);
  useEffect(() => {
    Image.getSize(resultimg, (width, height) => {
      setImageHeight(height / 3);
    });
  }, [resultimg]);

  return (
    <Container>
      <Header onPress={() => navigation.navigate("Profile")}>
        <UserAvatar resizeMode="cover" source={{ uri: resultAvatar }} />
        <Username>{user.username}</Username>
      </Header>
      <File
        resizeMode="cover"
        style={{
          width,
          height: imageHeight,
        }}
        source={{ uri: resultimg }}
      />
      <ExtraContainer>
        <Actions>
          <Action>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              color={isLiked ? "tomato" : "white"}
              size={22}
            />
          </Action>
          <Action onPress={() => navigation.navigate("Comments")}>
            <Ionicons name="chatbubble-outline" color="white" size={22} />
          </Action>
        </Actions>
        <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
        <Caption>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Username>{user.username}</Username>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </ExtraContainer>
    </Container>
  );
}

Photo.prototype = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({}),
  caption: PropTypes.string,
  //   file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};

export default Photo;
