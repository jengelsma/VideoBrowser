import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import PlayLaterContextProvider from './context/PlayLaterContext';
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

function PlayLaterStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PlayLaterVideos'
        component={WatchLaterScreen}
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
    <PlayLaterContextProvider>
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
            component={PlayLaterStackNavigator}
            options={{
              title: 'Watch Later Videos',
              drawerIcon: ({ color, size }) => (
                <Ionicons name='time' color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PlayLaterContextProvider>
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
