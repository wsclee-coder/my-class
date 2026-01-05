//https://github.com/fangwei716/30-days-of-react-native/blob/development/view/day7.js
// adapted to run in Expo go
// npx create-expo-app my-class --template blank
// 
// SDk 51 failed to run on Expo Go 2.31 ( node_modules , cache not clean ?) 
// OK to migrate from expo SDK 51 to SDK 52
// Icon is wrong in SDK 52
// Migration steps:
// edit dependencies versions in package.json ( take helloworld as reference )
// delete node_modules folder 
// npm cache clean --force  
// delete package-lock.json
// npm install expo@52.0.43
// npx expo install
// install Expo Go for sdk52  on Android ( Expo 2.32.19 ) 
 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import Util from './utils';
import MoveableCircle from './MoveableCircle';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require('./img/agrass.png')} style={styles.bg}></Image>
        <View style={styles.circleContainer}>
          <MoveableCircle></MoveableCircle>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height:Util.size.height,
    width: Util.size.width
  },
  bg:{
    width: Util.size.width,
    resizeMode:"stretch",
    position:"absolute"
  },
  circleContainer:{
    height:Util.size.height,
    width: Util.size.width,
  },
});
