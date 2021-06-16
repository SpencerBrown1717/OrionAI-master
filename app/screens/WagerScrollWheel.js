import React, { Component,useState }from "react";
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import OrionGameScreen from './OrionGameScreen'

const WagerScreenWheel = props =>{
    {
        const [wager, setWager] = useState(""); 
        const dataItems = [
            'Buy a cup of a coffee',
            'Pay for dinner',
            'Do a backflip',
            'd'];
            
        return(
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
        
           <Button title="confirm" onPress={()=>{props.navigation.navigate({routeName: 'GameScreen'
              });}}/>

       
       </View>
       
        )
    }
};
export default WagerScreenWheel;
const styles = StyleSheet.create({
    wagerscreen:{
        height:100,
        width:300,
        borderRadius:5
    },
    wagerview:{
        width:150,
        height:150
    }
    
})


