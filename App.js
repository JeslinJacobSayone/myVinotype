import {
  StackNavigator,
} from 'react-navigation';
import IntroScreen from './src/pages/IntroScreen';
import Login from './src/pages/Login';
import HomeScreen from './src/pages/HomeScreen'

export default StackNavigator({
  // Intro: { screen: IntroScreen },
  Login:{ screen: Login},
  Home:{  screen:HomeScreen}
},{headerMode:'none'});
