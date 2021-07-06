import React,{useState} from 'react';
import {View, Text,TextInput, StyleSheet, Button, Alert } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';

const NewUser = props => {
    const dispatch = useDispatch();
    const signupHandler = () => {
        dispatch(
          authActions.signup(
            enteredEmail,
            enteredNewPassword
          )
        );
    }

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNewPassword, setEnteredNewPassword] = useState('');
    const [enteredNewPhoneNumber, setPhoneNumberHandler] = useState('');
    //const [enteredNewLastname, setEnteredNewLastname] = useState('');
    const newEmailInputHandler = (enteredText) => {
        setEnteredEmail(enteredText);
      };
    const newPasswordInputHandler = (enteredText) => {
        setEnteredNewPassword(enteredText);
    };
    const newPhoneNumberHandler = (enteredText) => {
        setPhoneNumberHandler(enteredText);
    };
    // const newLastnameInputHandler = (enteredText) => {
    //     setEnteredNewLastname(enteredText);
    // };
    return(
<View style={styles.userContainer}>
        <View>
            <Text>
                Number
            </Text>
            <TextInput
            style ={styles.text}
            onChangeText={newPhoneNumberHandler}
            value = {enteredNewPhoneNumber}
            />
        </View>
    <View>
        <Text>
            Email
        </Text>
        <TextInput
        style ={styles.text}
        onChangeText={newEmailInputHandler}
        value={enteredEmail}
        />
    </View>
    <View>
        <Text>
            Password
        </Text>
        <TextInput
        style ={styles.text}
        onChangeText={newPasswordInputHandler}
        value={enteredNewPassword}
        />
    </View>
    <TouchableOpacity style={styles.buttonContainer} onPress={()=>{
    signupHandler();
    //     Alert.alert(
    //     "Alert Title",
    //     "My Alert Msg",
    //     [
    //         {
    //         text: 'Username: '+enteredNewUsername,
    //         onPress: () => console.log("Ask me later pressed")
    //       },
    //       {
    //         text: 'Username: '+enteredNewUsername,
    //         onPress: () => console.log("Ask me later pressed")
    //       },
    //       {
    //         text: 'Phone Number: '+enteredNewPhoneNumber,
    //         onPress: () => console.log("Cancel Pressed")
    //       },
    //       { text: "OK", 
    //       onPress: () => console.log("OK Pressed"),
    //       style: "cancel" }
    //     ]
    // )
        
    }}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
            Create New User
            </Text>
        </View>
    </TouchableOpacity>
</View>   
    )
}
export default NewUser;

const styles = StyleSheet.create({
    text:{
        borderBottomWidth: 1,
        borderBottomColor: 'gold',
        padding:5
    },
    userContainer:{
        width:'80%',
        marginTop: '20%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    buttonContainer:{
        padding:10,
        borderWidth:1, 
        backgroundColor: 'gold',
        margin:'15%',
        borderRadius: 200
    }, button:{
        padding:10,
        paddingLeft: '15%',
        paddingRight: '15%'
    },
    buttonText:{
        fontSize: 18
    }
})