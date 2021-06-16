import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WagerScreen from './app/screens/WagerScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import TutorialScreen from './app/screens/TutorialScreen';
import OrionGameScreen from './app/screens/OrionGameScreen';


const GameNavigator = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        Wager: WagerScreen,
        Tutorial: TutorialScreen,
        GameScreen: OrionGameScreen
},
    {mode:'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'gray' : 'white'},
        headerTintColor: Platform.OS === 'android' ? 'white' : 'gray'
    }
    });

export default createAppContainer(GameNavigator);