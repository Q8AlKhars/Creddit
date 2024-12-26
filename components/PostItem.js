import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostItem = ({ route }) => {

  const { post } = route.params;
  return (
    <View>
      <Text>{post.id}</Text>
      <Text>{post.title}</Text>
      <Text>{post.description}</Text>
    </View>
  );
};

export default PostItem;
