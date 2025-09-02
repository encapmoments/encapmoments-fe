import { View, Text, Image, useWindowDimensions } from "react-native";
import getWeeklyStyles from "./WeeklyStyles";

const Gifticon = ({ item_name, item_image, expires_at, is_used, barcode }) => {
  const { width, height } = useWindowDimensions();
  const weeklyStyles = getWeeklyStyles(width, height);
  
  // 만료일 포맷팅
  const formatExpireDate = (dateString) => {
    if (!dateString) return "만료일 없음";
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}까지`;
  };

  return (
    <View style={[
      weeklyStyles.backgroundStyle,
      { 
        backgroundColor: is_used ? '#f0f0f0' : '#ffffff',
        opacity: is_used ? 0.6 : 1,
      }
    ]}>
      <Image
        style={weeklyStyles.weeklyImage}
        resizeMode="cover"
        source={
          typeof item_image === "string"
            ? { uri: item_image }
            : item_image
        }
      />
      <Text style={[
        weeklyStyles.weeklyTitle,
        { color: is_used ? '#888888' : '#000000' }
      ]}>
        {item_name} {is_used && "(사용됨)"}
      </Text>
      <Text style={[
        weeklyStyles.weeklyPoint,
        { color: is_used ? '#888888' : '#000000' }
      ]}>
        {formatExpireDate(expires_at)}
      </Text>
      <Text style={[
        weeklyStyles.weeklyPoint,
        { 
          marginTop: height * 0.13,
          fontSize: 12,
          color: is_used ? '#888888' : '#666666'
        }
      ]}>
        바코드: {barcode || "없음"}
      </Text>
    </View>
  );
};

export default Gifticon;
