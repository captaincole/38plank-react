import HomeScreen from './screens/home/home.screen';
import UserScreen from './screens/user/user.screen';
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

registerScreens()

function registerScreens() {
  Navigation.registerComponent('plank.home', () => HomeScreen);
  Navigation.registerComponent('plank.user', () => UserScreen);
}

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'plank.home',
      title: 'Home'
    },
    {
      label: 'User',
      screen: 'plank.user',
      title: 'User'
    }
  ],
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
})
