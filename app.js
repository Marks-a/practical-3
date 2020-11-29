import * as React from "react";
import {useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import Constants from 'expo-constants';
import { FlatList} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export function HomeScr({navigation}) {
  const [skaits,uztaditskaitlu] =useState(0);
  return (
  <View>
  
  <Button title='Go to List View' onPress={() => {
    console.log('List');
    navigation.navigate('List');
    }
}/>
<Text>{skaits}</Text>
<View style={{marginTop:20}}></View>
<Button title='Increase Count' onPress={() => {
    console.log('list');
 uztaditskaitlu(skaits+1);  
    }
  }/>
<View style={{marginTop:20}}></View>
  <Button title='Decrease count' onPress={() => {
    console.log('list');
  uztaditskaitlu(skaits-1); 
    }
  }/>
  </View>
)
}
export function ListScr() {
  return (
<View>
<FlatListBasics/>
</View>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName='React apllication'>
    <Stack.Screen name="React application" component={HomeScr}/>
    <Stack.Screen name="List" component={ListScr}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  donut: {
   flex: 1,
   paddingTop: 1,
  },
  item: {
    padding: 10,
    flex: 1,
    fontSize: 20,
    height: 50,
    flexDirection: 'space-between',
    justifyContent: 'space-between',
    //alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)'
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.donut}>
      <FlatList
        data={[
          {key:"John Doh"},
          {key: 'Trip',},
          {key: 'geh'},
          {key: 'Ehh...'},
          {key: 'What?'},
          
        ]}
        renderItem={
          ({item}) =>{ 
          return ( <Text style={styles.item}>{item.key}
          
          </Text>
          )}}

      />
    </View>
  );
}
