/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { USERS } from '../../data/users';
import { auth, db } from '../../firebase';

const ProfileView = () => {
  const user = USERS[0];
  var currentUser = auth.currentUser;

  return (
    <View style={styles.profileView}>
      {/* <Image style={styles.imagestyle} source={require('../../assets/myFlockIcons/Vector.png')} /> */}

      <Text style={styles.profileName}>Meet {currentUser.displayName}!</Text>
      <Image source={{ uri: currentUser.photoURL }} style={styles.profileImage} />
      <>
        <Text style={{ fontWeight: 'bold' }}>About Me:</Text>
        <Text>{user.intro} </Text>
      </>
      <Text style={{ fontWeight: 'bold' }}>Location: </Text>
      <Text>{user.location.name} </Text>
      <>
        <Text style={{ fontWeight: 'bold' }}>Pronouns: </Text>
        <Text>{user.pronouns} </Text>
      </>
      <Text style={{ fontWeight: 'bold' }}>Interests: </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {user.interests.map((interest, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Text style={{ color: '#1f142e' }}>{interest}, </Text>
          </View>
        ))}
      </ScrollView>
      <Button buttonStyle={styles.button} title="Log Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F142E',
    borderColor: '#bf90b1',
    borderWidth: 5,
    width: 200,
    margin: 10,
  },
  imagestyle: {
    alignItems: 'flex-end',
    height: 15,
    width: 15,
  },
  profileView: {
    alignItems: 'center',
    backgroundColor: '#e6e8da',
    height: '100%',
  },
  profileImage: {
    height: 250,
    width: 250,
    marginBottom: 20,
    borderRadius: 125,
    borderWidth: 5,
    borderColor: '#e8984e',
    alignItems: 'center',
  },
  profileName: {
    color: '#1f142e',
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default ProfileView;

// /* eslint-disable no-unused-vars */

// import React, { useState, useEffect, useLayoutEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements';
// import { USERS } from '../../data/users';
// import { auth, db } from '../../firebase';

// const ProfileView = () => {
//   const user = USERS[0];
//   var currentUser = auth.currentUser;

//   return (
//     <View style={styles.profileView}>
//       {/* <Image style={styles.imagestyle} source={require('../../assets/myFlockIcons/Vector.png')} /> */}

//       <Text style={styles.profileName}>{currentUser.displayName}</Text>
//       <>
//         <Text>({user.pronouns})</Text>
//       </>
//       <Image source={{ uri: currentUser.photoURL }} style={styles.profileImage} />
//       <>
// 	  <Text style={{ fontSize: 25 }}>Location: {user.location.name}</Text>
//         <Text style={{ fontSize: 25 }}>About: {user.intro}</Text>
//       </>
//       <Text style={{ fontSize: 25 }}>Interests: </Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {user.interests.map((interest, index) => (
//           <View key={index} style={{ alignItems: 'flex' }}>
//             <Text style={{ fontSize: 25 }}>{interest}, </Text>
//           </View>
//         ))}
//       </ScrollView>
//       <Button buttonStyle={styles.button} title="Log Out" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#1F142E',
//     borderColor: '#bf90b1',
//     borderWidth: 5,
//     width: 200,
//     margin: 10,
//   },
//   imagestyle: {
//     alignItems: 'flex-end',
//     height: 15,
//     width: 15,
//   },
//   profileView: {
//     alignItems: 'center',
//     backgroundColor: '#e6e8da',
//     height: '100%',
//   },
//   profileImage: {
//     height: 250,
//     width: 250,
//     marginBottom: 20,
//     borderRadius: 125,
//     borderWidth: 5,
//     borderColor: '#e8984e',
//     alignItems: 'center',
//   },
//   profileName: {
//     color: '#1f142e',
//     // fontStyle: 'italic',
//     // fontWeight: '800',
//     fontSize: 35,
//     marginTop: 10,
//     marginBottom: 15,
//   },
// });

// export default ProfileView;
