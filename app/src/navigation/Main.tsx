import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "~/screens/Home";
import { MainStackParamList } from "./types";

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function Main() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
}
