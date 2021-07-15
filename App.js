// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// 1) FUNCTION component:
// const MyApp = () => {
//   return (
//     <View style={{ 
//                   flex: 1, 
//                   justifyContent: "center", 
//                   alignItems: "center"}}>
//       <Text>Hello World!</Text>
//     </View>
//   )
// }

// export default MyApp;

// 2) CLASS component
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center"
//         }}>
//         <Text>Hello, world!</Text>
//       </View>
//     );
//   }
// }

// export default HelloWorldApp;

// 3) FUN app haha
import React, { useState } from 'react'; // state component 'Hook' -> hook into React features
import { View, Text, Image, ScrollView, TextInput, ActivityIndicator, Button, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const getQTMessage = () => {
  return "woof woof"
}

const Corri = (activity) => {
  return (
    <View>
      <Text>{activity.name} time?</Text>
    </View>
  )
}

const QTMood = () => {
  const [isHappy, setIsHappy] = useState(true);
  return (
    <View style={{marginTop: 10}}>
      <Text>I am Corri, and I am {isHappy ? "sad" : "happy"}.</Text>
      <Button // "transperant" is a color btw
      color='#00008b' // there's an iOS specific dynamic color thingy (like dark theme)
      onPress={() => {
        setIsHappy(false);
        alert("You gave Corri a snack!");
      }} // scrolling and swiping are allowed
      disabled={!isHappy} 
      title={isHappy ? "Give me some snacks, please!" : "Thank you!"}
      />
    </View>
  );
}

const AppCorri= () => {
  const qtdog = "Corri";
  const [text, setText] = useState(''); // text = state component
                                        // useState -> 1. 'state variable' with an initial value (text, '')
                                        // 2. function to set that state variable's value (setText)
  return (
    <ScrollView> 
      {/* https://reactnative.dev/docs/scrollview */}
      <View style={styles.container}>
      <Text 
        style={{
          marginTop: 20,
          marginBottom: 10,
          fontSize: 30
        }}>
        Welcome!
      </Text>
        <ImageBackground
        source={require('./assets/blue_background.jpg')}
        style={{width: '100%', height: '100%'}}>
        <Text style={{marginBottom: 5}}>{qtdog}'s been waiting for you...{getQTMessage()}</Text>
        <Image 
          source={require('./assets/corri.jpg')} // source as an object? oh not this one
          style={{ marginBottom: 5, width: 500, height: 500 }} // JS object has braces
        />
        {/* <Image // network requests for images (example)
          source={{
            uri: 'https://reactjs.org/logo-og.png', // encoded image data -> data:
            method: 'POST',
            headers: {
              Pragma: 'no-cache'
            }, // cache management if iOS -> cache:
            body: 'Your Body goes here'
          }} // images from the camera roll -> https://github.com/react-native-cameraroll/react-native-cameraroll
          style={{ width: 400, height: 400 }}
        /> */}
        <Corri name="Snack"/>
        <Corri name="Play"/>
        <Corri name="Walk"/>
        <Corri name="Nap"/>
        <QTMood />
        </ImageBackground>
      </View>
      {/* <View> // can add style here later */}
      <View style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
      <Text style={{
        marginTop: 20,
        fontWeight: "bold"}}>
        You:
      </Text>
      <TextInput
        style={{
          height: 20,
          borderColor: 'gray',
          borderWidth: 1,
          // justifyContent: 'center',
          marginTop: 20,
          marginLeft: 5,
          marginBottom: 5,
          // marginRight: 20,
          width: Dimensions.get('window').width,
        }}
        placeholder=" Say something to Corri!"
        onChangeText={text => setText(text)}
        defaultValue={text}
        // defaultValue="Say something to Corri"
      />
      </View>
      <Text 
        style={{
          justifyContent: 'center',
          marginLeft: 20,
          marginBottom: 20
        }}>
        {/* {text} */}
        <Text style={{fontWeight: "bold"}}>Corri: </Text>
        {text.split(' ').map((word) => word && 'woof').join(' ')} 
        {/* woof per word */}
      </Text>
      {/* </View> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
    // fontStyle: 'Arial'
  }
})

export default AppCorri;