import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,Image, Alert} from 'react-native';
import {QUESTIONS} from '../data/question-data';

 const GameScreen = props =>{
     const currentWager = props.navigation.getParam('wager');
     const [currentScore, setCurrentScore] = useState(0);
     function getQuestion(){
         const number = Math.floor(Math.random() * 10)+1;
         const value = QUESTIONS.find(ques => ques.id == number);
         console.log(number);
         console.log(value);
         return value;
     }
     function checkAi(val){
        const rndInt = Math.floor(Math.random() * 2) + 1
        if (val==rndInt){
            Alert.alert(
                "Orion Guessed Right!",
                "",
                [
                    
                  { text: "OK", 
                  onPress: () => console.log("OK Pressed"),
                  style: "cancel" }
                ]
            );   
            
        }else{
            Alert.alert(
                "Incorrect by Orion",
                "Score +1",
                [
                  
                  { text: "OK", 
                  onPress: () => console.log("OK Pressed"),
                  style: "cancel" }
                ]
            ) 
            setCurrentScore(prevState=>prevState+1);  
        }
     }

     const [currentQuestion,setCurrentQuestion]=useState(getQuestion());
     const [currentRound, setCurrentRound] = useState(1);
     if (currentRound>7){
         return(
             <View style={styles.gameover}> 
             <View style = {styles.imageContainer}>
                <Image style={styles.image}
                resizeMode = {'cover'}
                source={{uri: 'https://cache.desktopnexus.com/thumbseg/836/836599-bigthumbnail.jpg'}}/>
                </View>
                        <Text>
                        Game Over
                        </Text>
                        <Text>
                        Score: {currentScore} out of 7
                        </Text>
                </View>
         );
     }
     return(
         
         <View style={styles.gameContainer}>
             <View style={{flex:1},{flexDirection:'row'}}> 
                 <Text style={styles.textContainer}>
              Wager: {currentWager}
            </Text>
            <Text style={styles.textContainer}>
             Round {currentRound} of 7
            </Text>
            </View>
            <Text style={styles.textContainer,{fontSize:18}}> 
                What does Lewis prefer?
            </Text>
            <Text>
                {currentScore}
            </Text>
            <View style={{width:'90%'}}>
                <View style={styles.choiceButton}>
                <Button title={currentQuestion.choice1} onPress={()=>{
                    checkAi(1);
                    setCurrentQuestion(prevState=>getQuestion()); 
                    setCurrentRound(prevState=>prevState+1)}}/>
                </View>
                <View style={styles.choiceButton}>
                <Button title={currentQuestion.choice2} onPress={()=>{
                    checkAi(2);
                    setCurrentQuestion(prevState=>getQuestion()); 
                    setCurrentRound(prevState=>prevState+1)}}/>
                </View>
            </View>
         </View>
         
     )
 }
const styles = StyleSheet.create({
    gameover:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },gameContainer:{
        alignItems:'center',
        justifyContent:'center'
    },textContainer:{
        padding:10,
        fontSize:20
    },
    image: {
        width: '100%',
        height: '100%'
    },imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },choiceButton: {
        width: '100%',
        height: 125,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20
      }
})
 export default GameScreen;