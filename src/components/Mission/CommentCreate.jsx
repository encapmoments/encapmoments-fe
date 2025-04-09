import { View, Text, TextInput } from 'react-native';
import CommentCreateStyles from './CommentCreateStyles';

const CommentCreate = () => {
    return (
        <View style={CommentCreateStyles.commentCreateWrapper}>
            <TextInput />
        </View>
    );
};

export default CommentCreate;
