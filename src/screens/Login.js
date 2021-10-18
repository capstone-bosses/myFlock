/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import { Input, Text} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {auth, db} from '../../firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const logOutUser = () => {
  //   db.collection('Users')
  //     .where('email', '==', email)
  //     .get()
  //     .then(function (querySnapshot) {
  //       querySnapshot.forEach(function (document) {
  //         document.ref.update({
  //           isLoggedIn: false,
  //         });
  //       });
  //       auth.signOut().then(() => {});
  //       // navigation.replace('Login')
  //       alert('You have been logged out!');
  //     });
  // };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.goBack();
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        db.collection('Users')
          .where('email', '==', email)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (document) {
              document.ref.update({
                isLoggedIn: true,
              });
            });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{marginTop: 50, textAlign: 'center'}}>
        Welcome Back!
      </Text>
      <Image
        source={require('../../assets/myFlockIcons/Budgie.png')}
        style={{height: 200, width: 200, marginBottom: 25, marginTop: 25}}
      />

      <View style={styles.inputContainer}>
        <Text h3 style={{marginBottom: 25}}>
          Log in to find out where your peeps are at...
        </Text>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#e8984e',
          borderWidth: 3,
          width: 200,
          height: 50,
          marginTop: 30,
          marginBottom: 40,
        }}
        onPress={signIn}
      >
        <Text style={{fontSize: 22, color: '#1f142e'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={{fontSize: 18, color: 'black'}}>Don't have an account? </Text>
        <Text style={{fontSize: 18, color: 'black', textDecorationLine: 'underline'}}>
          Join us!
        </Text>
      </TouchableOpacity>

      {/* <Button buttonStyle={styles.button} onPress={logOutUser} title="Logout - Temp" /> */}

      <View style={{height: 100}} />
    </KeyboardAvoidingView>
  );
};

//Styles and colors to be replaced with chosen design colors
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E8DA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    color: 'black',
    backgroundColor: '#e6e8da',
    width: 200,
    marginTop: 30,
  },
});

export default LoginScreen;
