import { View, Text, Image, useWindowDimensions, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import getWeeklyStyles from "./WeeklyStyles";

const Gifticon = ({ item_name, item_image, expires_at, is_used, barcode }) => {
  const { width, height } = useWindowDimensions();
  const weeklyStyles = getWeeklyStyles(width, height);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  
  // 만료일 포맷팅
  const formatExpireDate = (dateString) => {
    if (!dateString) return "만료일 없음";
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}까지`;
  };

  const openImageModal = () => {
    setIsImageModalVisible(true);
  };

  const closeImageModal = () => {
    setIsImageModalVisible(false);
  };

  return (
    <>
      <View style={[
        weeklyStyles.backgroundStyle,
        { 
          backgroundColor: is_used ? '#f0f0f0' : '#ffffff',
          opacity: is_used ? 0.6 : 1,
        }
      ]}>
        <TouchableOpacity onPress={openImageModal} activeOpacity={0.8}>
          <Image
            style={weeklyStyles.weeklyImage}
            resizeMode="cover"
            source={
              typeof item_image === "string"
                ? { uri: item_image }
                : item_image
            }
          />
        </TouchableOpacity>
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

      {/* 이미지 확대 모달 */}
      <Modal
        visible={isImageModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeImageModal}
      >
        <TouchableOpacity 
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPress={closeImageModal}
        >
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {}} // 이미지 자체는 클릭해도 모달이 닫히지 않도록
          >
            <Image
              style={{
                width: width * 0.9,
                height: height * 0.6,
                borderRadius: 10,
              }}
              resizeMode="contain"
              source={
                typeof item_image === "string"
                  ? { uri: item_image }
                  : item_image
              }
            />
          </TouchableOpacity>
          
          {/* 닫기 안내 텍스트 */}
          <Text style={{
            color: 'white',
            fontSize: 16,
            marginTop: 20,
            textAlign: 'center',
          }}>
            화면을 터치하여 닫기
          </Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Gifticon;
