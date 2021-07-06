import React, {useState}from 'react';
import { StyleSheet, Text, View, Alert, Button, SafeAreaView, Platform, TouchableOpacity,FlatList, TextInput} from 'react-native';
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
        <View>
        <View style = {styles.wagerview}>
          <View style ={styles.customView}>
            <Text style={{fontSize:24}}>Custom Wager</Text>
          <TextInput style = {styles.customInput} onChangeText={text => setWager(text)}/>
       
       <TouchableOpacity title="Confirm Custom" style={styles.buttonContainer} onPress={()=>{props.navigation.navigate({routeName: 'GameScreen', params:{wager:currentWager}})}}>
         <Text style={{fontSize:25}}> Confirm</Text>
       </TouchableOpacity>
       
       </View>
          
          </View>
          <View style={styles.scrollpickerView}>
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
      
    },scrollpickerView:{
      width:300,
      height: 300,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius:10,
      
    }
    ,customView:{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
      width:'100%',
      borderRadius:10,
      marginTop:20
    },
    buttonContainer: {
        width: 300,
        height: 125,
        backgroundColor: "goldenrod",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10
       
    },
    logo: {
      fontSize: 30,
    },
  wagerview:{
      width:300,
      height:300,
      marginTop:10,
      marginBottom:10,
      justifyContent:"center",
      alignItems:'center'

  },
  customInput:{
    borderColor: "black",
        borderRadius: 200,
        width:'50%',
        borderWidth: 1,
        padding:10,
        margin:5
  }
});

export default WagerScreen;