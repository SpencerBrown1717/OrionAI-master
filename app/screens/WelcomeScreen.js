import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
 const WelcomeScreen = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Orion AI</Text>
      <View style= {styles.playButton}>
          <Button 
            title= "PLAY"
            color= "gray"
            onPress ={()=>{
              props.navigation.navigate({routeName: 'Wager'
              });
            }}
          />  
      </View>

      <View style= {styles.howToButton}>
          <Button 
            title= "HOW TO PLAY"
            color= "gray"
             onPress ={()=>{
              props.navigation.navigate({routeName: 'Tutorial'});
            }}
          />
      </View>
    </View>
  );
}
WelcomeScreen.navigationOptions = {
  headerTitle: 'Welcome Screen'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  playButton: {
      width: '100%',
      height: 125,
      backgroundColor: "goldenrod",
      justifyContent: "center",
      alignItems: "center",
  },
  howToButton: {
    width: '100%',
    height: 125,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    top: -250,
    fontSize: 50,
  }
});

export default WelcomeScreen;