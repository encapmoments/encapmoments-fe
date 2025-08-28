import { View, Text, Image } from "react-native";
import CommentStyles from "./CommentStyles";

const Comment = ({ memberImage, memberName, commentText }) => {
  const imageSource = typeof memberImage === 'string'
    ? { uri: memberImage }
    : memberImage;

  return (
    <View style={CommentStyles.commentWrapper}>
      <View style={CommentStyles.commentMember}>
        <View style={CommentStyles.commentMemberIconWrapper}>
          <Image
            style={CommentStyles.commentMemberIcon}
            source={imageSource}
          />
        </View>
        <Text style={CommentStyles.commentMemberName}>{memberName}</Text>
      </View>
      <Text style={CommentStyles.commentMemberComment}>{commentText}</Text>
    </View>
  );
};

export default Comment;
