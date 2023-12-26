import { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");
//Component
import Greet from "./components/Greet";
import Box from "./components/Layout";

export default function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Button title='Press' onPress={() => setIsModal(true)} color='midnightblue' />
      <Pressable onPress={()=>console.log('Image Press')}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={()=>console.log('text Press')}>
        <Text style={{marginTop: 50}}>
          loremdasdasdasdadasd
        </Text>
      </Pressable>
      <Modal visible={isModal} onRequestClose={() => setIsModal(false)} animationType='slide' presentationStyle='pageSheet'>
        <View style={{flex:1, backgroundColor:'lightblue', padding:60}}>
          <Text>Modal Content</Text>
          <Button title='Close' color='midnightblue' onPress={() => setIsModal(false)} />
        </View>
      </Modal>

      <StatusBar backgroundColor='lightgreen' barStyle='dark-content' hidden />

      <ActivityIndicator size='large' color='midnightblue' animating={true}/>
      <ActivityIndicator size='large' color='midnightblue'/>
      <ActivityIndicator /> */}

      {/* <Button title="Alert" onPress={() => Alert.alert("Invalied")} />
      <Button
        title="Alert"
        onPress={() => Alert.alert("Invalied", "Isim Gecersiz")}
      />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalied", "Isim Gecersiz", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Okey",
              onPress: () => console.log("Okey pressed!"),
            },
          ])
        }
      /> */}

    {/* Styling
      <Greet name='Pascal Nouma' /> 
    */}
    
    <Box style={{ backgroundColor: '#8e9000'}}>Box 1</Box>
    <Box style={{ backgroundColor: '#b65000'}}>Box 2</Box>
    <Box style={{ backgroundColor: '#1c4000'}}>Box 3</Box>
    <Box style={{ backgroundColor: '#ab9000',flexGrow: 2}}>Box 4</Box>
    <Box style={{ backgroundColor: '#b95000',flexGrow: 4}}>Box 5</Box>
    
    </View>
  );
}


const styles = StyleSheet.create({
  // container: { flex: 1, backgroundColor: 'white', padding: 60}
  container: {
    marginTop: 64,
    flex: 1,
    borderWidth: 6,
    borderColor: 'red',
  }
})