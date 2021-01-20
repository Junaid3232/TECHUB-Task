// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Play from './screens/Play';
import Home from './screens/Home';
import Search from './screens/search';
import Notification from './screens/notification';
import Profile from './screens/profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Play') {
              iconName = focused ? 'play-circle-outline' : 'play-circle';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home-variant' : 'home-variant-outline';
            } else if (route.name === 'Play') {
              iconName = focused ? 'play-circle-outline' : 'play-circle';
            } else if (route.name === 'Search') {
              iconName = focused ? 'layers-search-outline' : 'layers-search';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'bell-outline' : 'bell';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account-outline' : 'account';
            }

            // You can return any component that you like here!
            return <Icon size={30} color={color} name={iconName} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'white',
          showLabel: false,
          style: {
            backgroundColor: '#15294F',
            paddingBottom: 3,
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Play" component={Play} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
