import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabBar } from "../../common/commonIndex";
import { useEffect, useState } from "react";
import { getMyItems } from "../../models/market";
import useAccessToken from "../../models/accessToken";
import getProfileMyMissionsScreenStyles from "../Profile/ProfileMyMissionsScreenStyles";
import { Colors } from "../../styles/stylesIndex";
import Gifticon from "../../components/Profile/Gifticon";

const ProfileMyGifticonScreen = ({ navigation }) => {
  const accessToken = useAccessToken();
  const { width, height } = useWindowDimensions();
  const pmStyles = getProfileMyMissionsScreenStyles(width, height);

  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyItems = async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const items = await getMyItems(accessToken);
        setMyItems(items || []);
      } catch (error) {
        console.error("기프티콘 가져오기 실패:", error);
        setMyItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMyItems();
  }, [accessToken]);

  if (loading) {
    return (
      <SafeAreaView style={[pmStyles.safeArea, { backgroundColor: Colors.basic }]}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.basic }}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <SafeAreaView style={[pmStyles.safeArea, { backgroundColor: Colors.basic }]}>
        <View style={pmStyles.backgroundStyle}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={pmStyles.touchBackArrow}>
            <Image
              style={pmStyles.backArrow}
              source={require("../../assets/icons/backArrowWrapper.png")}
            />
          </TouchableOpacity>
          <View style={pmStyles.topStyle}>
            <Text style={pmStyles.mainText}>내 기프티콘</Text>
          </View>
        </View>
        
        <View style={[pmStyles.missionWrapper, { flex: 1, backgroundColor: Colors.basic }]}>
          <Text style={pmStyles.text}>보유 기프티콘</Text>
          <View style={pmStyles.missionWrapperWrapper}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={[pmStyles.weeklyMissionWrapper, { backgroundColor: Colors.basic }]}>
              {myItems.length > 0 ? (
                myItems.map((item, index) => (
                  <Gifticon
                    key={item.user_reward_id ?? `gifticon-${index}`}
                    item_name={item.item_name}
                    item_image={item.item_image}
                    expires_at={item.expires_at}
                    is_used={item.is_used}
                    barcode={item.barcode}
                  />
                ))
              ) : (
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: height * 0.3,
                  backgroundColor: Colors.basic,
                }}>
                  <Text style={{
                    fontSize: 16,
                    color: '#888888',
                    textAlign: 'center',
                  }}>
                    보유한 기프티콘이 없습니다.{'\n'}
                    마켓에서 기프티콘을 구매해보세요!
                  </Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />
    </>
  );
};

export default ProfileMyGifticonScreen;
