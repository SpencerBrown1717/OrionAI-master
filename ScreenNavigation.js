import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import WagerScreen from './app/screens/WagerScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import TutorialScreen from './app/screens/LoginScreen';
import GameScreen from './app/screens/OrionGameScreen';
import NewUserScreen from './app/screens/NewUserScreen';


const GameNavigator = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        Wager: WagerScreen,
        Tutorial: TutorialScreen,
        GameScreen: GameScreen,
        NewUserScreen: NewUserScreen
},
    {mode:'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? 'gray' : 'white'},
        headerTintColor: Platform.OS === 'android' ? 'white' : 'gray'
    }
    });
const AuthNavigator = createStackNavigator({
    NewUserScreen: NewUserScreen,
    LoginUserScreen: TutorialScreen,
})
const MainNav = createSwitchNavigator({
    Game: GameNavigator,
    Auth: AuthNavigator
}
)
export default createAppContainer(GameNavigator);