import { useState } from 'react';
import { useWindowDimensions, View, Image, TouchableOpacity, Text, TextInput, Modal, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import getMemberUpdateStyles from './MemberUpdateStyles';
import { TabBar, CommonButton } from '../../common/commonIndex';

const MemberUpdate = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const updateStyles = getMemberUpdateStyles(width, height);

    const [memberName, setMemberName] = useState('아빠');
    const [tempName, setTempName] = useState('아빠');
    const [isEditingName, setIsEditingName] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleNamePress = () => {
        setTempName(memberName);
        setIsEditingName(true);
    };

    const saveNameEdit = () => {
        if (tempName.trim()) {
            setMemberName(tempName.trim());
            setIsEditingName(false);
        } else {
            Alert.alert('이름을 입력해주세요');
        }
    };

    const cancelNameEdit = () => {
        setTempName(memberName);
        setIsEditingName(false);
    };

    const handleImagePick = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
            if (!response.didCancel && !response.errorCode) {
                const uri = response.assets?.[0]?.uri;
                if (uri) {
                    setSelectedImage(uri);
                }
            }
        });
    };

    return (
        <>
            <View style={updateStyles.backgroundStyle}>
                <View style={updateStyles.topStyle}>
                    <TouchableOpacity onPress={() => navigation.pop()} style={updateStyles.touchBackArrow}>
                        <Image
                            style={updateStyles.backArrow}
                            source={require('../../assets/icons/backArrowWrapper.png')}
                        />
                    </TouchableOpacity>
                    <Text style={updateStyles.mainText}>구성원 설정</Text>
                </View>
                <View style={updateStyles.updateContainer}>
                    <TouchableOpacity onPress={handleNamePress}>
                        <Text style={updateStyles.updateMember}>{memberName}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleImagePick} style={updateStyles.updateMemberImageWrapper}>
                        <Image
                            style={updateStyles.updateMemberImage}
                            source={selectedImage ? { uri: selectedImage } : require('../../assets/AppBarImages/person.png')}
                        />
                    </TouchableOpacity>
                    <CommonButton style={updateStyles.commonButton} title="완료"
                        onPress={() => { navigation.navigate('ProfileAccount'); }}/>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isEditingName}
                    onRequestClose={cancelNameEdit}
                >
                    <View style={updateStyles.modalOverlay}>
                        <View style={updateStyles.modalContainer}>
                            <Text style={updateStyles.modalTitle}>구성원 이름 입력</Text>
                            <TextInput
                                style={updateStyles.modalInput}
                                value={tempName}
                                onChangeText={setTempName}
                                placeholder="이름을 입력하세요"
                                autoFocus={true}
                                maxLength={10}
                            />
                            <View style={updateStyles.modalButtonContainer}>
                                <TouchableOpacity style={updateStyles.modalCancelButton} onPress={cancelNameEdit}>
                                    <Text style={updateStyles.modalCancelText}>취소</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={updateStyles.modalSaveButton} onPress={saveNameEdit}>
                                    <Text style={updateStyles.modalSaveText}>저장</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <TabBar />
        </>
    );
};

export default MemberUpdate;
