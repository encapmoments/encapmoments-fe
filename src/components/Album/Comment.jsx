import { View, Text, Image } from "react-native";
import CommentStyles from "./CommentStyles";

const Comment = ({ memberImage, memberName, commentText }) => {
  return (
    <View style={CommentStyles.commentWrapper}>
      <View style={CommentStyles.commentMember}>
        <View style={CommentStyles.commentMemberIconWrapper}>
          <Image style={CommentStyles.commentMemberIcon} source={memberImage} />
        </View>
        <Text style={CommentStyles.commentMemberName}>{memberName}</Text>
      </View>
      <Text style={CommentStyles.commentMemberComment}>{commentText}</Text>
    </View>
  );
};

export default Comment;
