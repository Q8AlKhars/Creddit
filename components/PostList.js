import { View, Text, TouchableOpacity } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { useNavigation } from "@react-navigation/native";

export const PostList = () => {
  const navigation = useNavigation();
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  if (isFetching) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {data?.map((post) => (
        <TouchableOpacity
          key={post.id}
          onPress={() => navigation.navigate("PostItem", { post: post })}
        >
          <Text>{post.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PostList;
