import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function index( ) {

  // const { id } = useLocalSearchParams();
  
  return (
    <View className="flex-1 justify-center items-center bg-lavender border-10 border-white shadow-black shadow-offset-0-2 shadow-opacity-80 shadow-radius-2">
      <Text className="text-red-500 text-ellipsis">Hello World.</Text>
      <Link href={"/profile"}>GoTo Profile</Link>
      <Link href={"/"}>Goto Home</Link>
      {/* <Stack.Screen name="About" component={About} /> */}
    </View>
  );
}
