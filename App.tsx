import HomeScreen from './screens/home/home.screen';
import UserScreen from './screens/user/user.screen';
import ChallengeSelectScreen from './screens/challenges/Challenges-select';
import ChallengeDetailsScreen from './screens/challenges/Challenge-Details';
import FeedScreen from './screens/feed/Feed';
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

registerScreens()

function registerScreens() {
  Navigation.registerComponent('plank.home', () => HomeScreen);
  Navigation.registerComponent('plank.user', () => UserScreen);
  Navigation.registerComponent('plank.feed', () => FeedScreen);
  Navigation.registerComponent('plank.challenge.select', () => ChallengeSelectScreen);
  Navigation.registerComponent('plank.challenge.details', () => ChallengeDetailsScreen)
}

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'plank.home',
      title: 'Home'
    },
    {
      label: 'Feed',
      screen: 'plank.feed',
      title: 'Feed'
    },
    {
      label: 'Challenges',
      screen: 'plank.challenge.select',
      title: 'Challenges'
    },
    {
      label: 'User',
      screen: 'plank.user',
      title: 'User'
    }
  ],
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
})
