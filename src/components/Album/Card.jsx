import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import getCardStyles from "./CardStyles";

const Card = ({
  album_id,
  album_image,
  album_title,
  location,
  album_tag,
  navigation,
}) => {
  const { width, height } = useWindowDimensions();
  const cardStyles = getCardStyles(width, height);

  // 이미지 소스 처리 - 문자열이면 uri 객체로, 아니면 그대로 사용
  const imageSource = typeof album_image === 'string'
    ? { uri: album_image }
    : album_image;

  return (
    <View style={cardStyles.backgroundStyle}>
      <TouchableOpacity
        onPress={() => navigation.navigate("AlbumSelect", { album_id })}
        style={cardStyles.no}>
        <Image
          style={cardStyles.albumImage}
          source={imageSource}
          onError={(error) => {
            console.log('앨범 이미지 로드 오류:', error);
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={cardStyles.texts}>{album_title}</Text>
      <View style={cardStyles.locationRow}>
        <Image
          style={cardStyles.locationImage}
          source={require("../../assets/icons/locationIcon.png")}
        />
        <Text style={cardStyles.locationText}>{location}</Text>
      </View>
      <View style={cardStyles.locationRow}>
        <Text style={cardStyles.tagText}>#{album_tag}</Text>
      </View>
    </View>
  );
};

export default Card;
