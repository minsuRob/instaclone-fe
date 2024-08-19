import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";

const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text`
  color: white;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text`
  color: white;
`;
const Likes = styled.Text`
  color: white;
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
function Photo({ id, user, caption, file, isLiked, likes }) {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <Header>
        <UserAvatar />
        <Username>{user.username}</Username>
      </Header>
      <File
        style={{
          width,
          height: height - 500,
        }}
        source={{ uri: imgfile[getRandom(0, 5)] }}
      />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
      <Caption>
        <Username>{user.username}</Username>
        <CaptionText>{caption}</CaptionText>
      </Caption>
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
