import { View, Text, TextInput } from 'react-native';
import CommentCreateStyles from './CommentCreateStyles';

export const CommentCreate = () => {
    return (
        <View style={CommentCreateStyles.commentCreateWrapper}>
            <Text style={CommentCreateStyles.commentCreateMember}>구성원 선택</Text>
            <TextInput style={CommentCreateStyles.commentCreateDescription} placeholder="느낀점 작성" />
        </View>
    );
};
