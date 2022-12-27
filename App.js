import { React } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/components/utility/SafeArea";
import { Ionicons } from '@expo/vector-icons';

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';


import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { View, Text } from "react-native";

export default function App() {

  let [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });


  if(!poppinsLoaded || !latoLoaded){
    return null;
  }


  function SettingsScreen() {
    return(
      <SafeArea>
        
          <Text>Settings</Text>

      </SafeArea>
    )
  }

  


  function MapScreen() {
    return(
      <SafeArea><Text>Map</Text></SafeArea>  
    )
  }

  const TAB_ICON = {
    Restaurants: {
      focused: 'md-restaurant',
      unfocused: 'md-restaurant-outline'
    },
    Map: {
      focused: 'map',
      unfocused: 'map-outline'
    },
    Settings: {
      focused: 'settings-sharp',
      unfocused: 'settings-outline'
    }
  }

  const tabBarIcon = () => <Ionicons name={iconName} size={size} color={color} />;

  const screenOptions = ({route}) => {
    return{
      tabBarIcon,
    }
  }

  const Tab = createBottomTabNavigator();
  

  return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => { },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
  )
}




