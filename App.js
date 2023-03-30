import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import VideoListScreen from './screens/VideoListScreen';
import WatchLaterScreen from './screens/WatchLaterScreen';
import YTViewerScreen from './screens/YTViewerScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Browse Videos'
        component={VideoListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Video Viewer'
        component={YTViewerScreen}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        options={{
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name='VideoBrowser'
          component={StackNavigator}
          options={{
            title: 'Video Browser',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='videocam' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name='WatchLater'
          component={WatchLaterScreen}
          options={{
            title: 'Watch Later Videos',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='time' color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
