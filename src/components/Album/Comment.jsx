import { View, Text, Image } from 'react-native';
import CommentStyles from './CommentStyles';

const Comment = ({ image, member, comment }) => {
    return (
        <View style={CommentStyles.commentWrapper}>
            <View style={CommentStyles.commentMember}>
            <View style={CommentStyles.commentMemberIconWrapper}>
                <Image
                style={CommentStyles.commentMemberIcon}
                source={image}
                />
            </View>
                <Text style={CommentStyles.commentMemberName}>{member}</Text>
            </View>
            <Text style={CommentStyles.commentMemberComment}>{comment}</Text>
        </View>
    );
};

export default Comment;
