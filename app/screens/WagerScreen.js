import React, {useState}from 'react';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView, Platform, TouchableOpacity} from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';

const WagerScreen = props => {
  const [currentWager, setWager] = useState(""); 
        const dataItems = [
            'Buy a cup of a coffee',
            'Pay for dinner',
            'Do a backflip',
            'd'
          ];
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Orion AI</Text>
        
        <View style = {styles.wagerview}>
            <ScrollPicker
        dataSource={dataItems}
        selectedIndex={0}
        renderItem={(data, index, isSelected) => {
        return(
            <View>
                <Text >{data}</Text>
            </View>
        )
    }}
       onValueChange={(data, selectedIndex) => {
         setWager(data)
       }}
        itemHeight={60}
        wrapperHeight={180}
        wrapperWidth={150}
        highlightColor={"#d8d8d8"}
        highlightBorderWidth={2}
        style = {styles.wagerscreen}/>
        <View >
           <TouchableOpacity style={styles.buttonContainer}title="Confirm" onPress={()=>{
             props.navigation.navigate({routeName: 'GameScreen', params:{wager:currentWager}});
             
            }}>
              <Text style={ {fontSize:25}}>Confirm</Text>
            </TouchableOpacity>
        </View>
       
       </View>
    </SafeAreaView>
  );
}
WagerScreen.navigationOptions = {
  headerTitle: 'Wager Screen'
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
    },
    buttonContainer: {
        width: '100%',
        height: 125,
        backgroundColor: "goldenrod",
        justifyContent: "center",
        alignItems: "center",
       
    },
    logo: {
      fontSize: 30,
    },
  wagerview:{
      width:300,
      height:300,
      margin:100
  }
});

export default WagerScreen;