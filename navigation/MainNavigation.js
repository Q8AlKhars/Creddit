import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostList from "../components/PostList";
import PostItem from "../components/PostItem";

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostList" component={PostList} />
      <Stack.Screen name="PostItem" component={PostItem} />
    </Stack.Navigator>
  );
};
