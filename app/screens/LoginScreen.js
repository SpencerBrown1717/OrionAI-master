import React,{useState} from 'react';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView, Platform,TextInput} from 'react-native';

const TutorialScreen=props=>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const usernameInputHandler = (enteredText) => {
        setEnteredUsername(enteredText);
      };
    const passwordInputHandler = (enteredText) => {
        setEnteredPassword(enteredText);
      };
    return(
        
        <View style = {styles.inputContainer}>
            <View style = {styles.usernameStyle}>
                <TextInput
                placeholder = "Username"
                onChangeText={usernameInputHandler}
                value={enteredUsername}
                />
            </View>
            <View style = {styles.usernameStyle}>
                <TextInput
                placeholder = "Password"
                onChangeText={passwordInputHandler}
                value={enteredPassword}
                />
            </View>
            <View style = {styles.buttons}>
                <Button title = 'Login In' />
                <Button title = 'New User' onPress = {() => props.navigation.navigate({routeName: 'NewUserScreen'})}/>
            </View>
        </View>
    
    );
}
TutorialScreen.navigationOptions = {
        headerTitle: 'Sign Up'
    };
const styles = StyleSheet.create({
        usernameStyle:{
            borderColor: "black",
            borderRadius: 200,
            width:'50%',
            borderWidth: 1,
            padding:10,
            margin:5,
            backgroundColor:'white'
        }, inputContainer:{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor:'gray'
            
        }, buttons:{
            flexDirection: 'row',
            marginTop:10,
            backgroundColor:'white',
            borderRadius: 200,
        }
    
    })
export default TutorialScreen;