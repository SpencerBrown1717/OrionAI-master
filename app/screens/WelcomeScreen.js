import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
 const WelcomeScreen = props => {
  return (
    <View style={styles.container}>
        <ImageBackground style= {styles.background}   
            source={require("../assets/Background.png")} >
              <Image style={styles.logoStars}
              source={require("../assets/ThreeStars.png")} ></Image>
              <Image style={styles.logo}
              source={require("../assets/OrionLogo.png")} ></Image>
              <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate({routeName: 'Wager'})}}>
                <Image style={styles.playButton} source={require("../assets/PlayButton.png")} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress ={()=>{props.navigation.navigate({routeName: 'Tutorial'})}}>
                <Image style={styles.playButton} source={require("../assets/SignUpButton.png")}/>
              </TouchableOpacity>
        </ImageBackground>
    </View>
  );
}
WelcomeScreen.navigationOptions = {
  headerTitle: 'Welcome Screen'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  playButton: {
      width: 200,
      height: 100,
      resizeMode: "contain"
  },
  button: {
    shadowOpacity: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    top: 0,
    height: "30%",
    width: "100%"
  },
  logoStars: {
    resizeMode: "contain",
    width: "80%",
    height: "10%"
  },
  background: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
  }
});

export default WelcomeScreen;