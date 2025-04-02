import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AlbumSelectScreenStyles from './AlbumSelectScreenStyles';
import { TabBar } from '../../common/commonIndex';
import Comment from '../../components/Album/Comment';

const AlbumSelectScreen = ({ navigation }) => {

    return (
        <>
            <View style={AlbumSelectScreenStyles.backgroundStyle}>
                <TouchableOpacity onPress={() => navigation.pop()} style={AlbumSelectScreenStyles.touchBackArrow}>
                    <Image
                        style={AlbumSelectScreenStyles.backArrow}
                        source={require('../../assets/icons/backArrowWrapper.png')}
                    />
                </TouchableOpacity>
                <Image
                    style={AlbumSelectScreenStyles.albumImage}
                    source={require('../../assets/AppBarImages/covers/cover2.jpg')}
                />
                <View style={AlbumSelectScreenStyles.albumInfo}>
                    <Text style={AlbumSelectScreenStyles.albumTitle}>기린이랑 사진 찍기</Text>
                    <Text style={AlbumSelectScreenStyles.albumTag}>#경주빵</Text>
                    <Text style={AlbumSelectScreenStyles.albumDate}>2025.03.25 (화)</Text>

                    <View style={AlbumSelectScreenStyles.albumCommentsWrapper}>
                        <ScrollView style={AlbumSelectScreenStyles.albumComments}>
                            <Comment image={require('../../assets/AppBarImages/person.png')} member={'아빠'} comment={'재밌어요'}/>
                            <Comment image={require('../../assets/AppBarImages/person.png')} member={'엄마'} comment={'재미없어요'}/>
                            <Comment image={require('../../assets/AppBarImages/person.png')} member={'나'} comment={'재밌어요'}/>
                            <Comment image={require('../../assets/AppBarImages/person.png')} member={'삼촌'} comment={'재미없어요'}/>
                            <Comment image={require('../../assets/AppBarImages/person.png')} member={'고모'} comment={'재밌어요'}/>
                            <Comment image={require('../../assets/AppBarImages/person.png')} member={'이모부'} comment={'재미없어요'}/>
                            <View style={AlbumSelectScreenStyles.commentLastText}>
                                <TouchableOpacity onPress={() => navigation.navigate('MissionPost')}>
                                    <Text style={AlbumSelectScreenStyles.commentLastTextUpdate}>수정</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={AlbumSelectScreenStyles.commentLastTextDelete}>삭제</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <TabBar navigation={navigation}/>
        </>

    );
};

export default AlbumSelectScreen;
