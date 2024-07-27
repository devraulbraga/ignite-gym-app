import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { History } from "../screens/History";
import { Profile } from "../screens/Profile";
import { Exercise } from "../screens/Exercise";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import HomeSvg from "../assets/home.svg";
import HistorySvg from "../assets/history.svg";
import ProfileSvg from "../assets/profile.svg";
import { Platform } from "react-native";

type AppRoutes = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
  Exercise: undefined;
};
export type AppNavigationProp = BottomTabNavigationProp<AppRoutes>;
const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { tokens } = gluestackUIConfig;
  const iconSize = tokens.space["6"];
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray200,
        tabBarStyle: {
            backgroundColor: tokens.colors.gray600,
            borderTopWidth: 0,
            height: Platform.OS === "android" ? "auto" : 50,
            paddingBottom: Platform.OS === "android" ? tokens.space["10"] : tokens.space["5"],
            paddingTop: Platform.OS === "android" ? tokens.space["6"] : tokens.space["5"],
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen name="Exercise" component={Exercise} options={{tabBarButton: () => null}}/>
    </Navigator>
  );
}
