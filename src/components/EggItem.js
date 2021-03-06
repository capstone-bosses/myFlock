/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase';
import { useFocusEffect } from '@react-navigation/native';


const EggItem = ({id, photos, names, enterChat, navigation}) => {
  const [eggPicture, setEggPicture] = useState("https://literaryyard.files.wordpress.com/2017/11/smiling-face-funny-bird-picture.jpg?w=639)")
  const [chatMessages, setChatMessages] = useState("")
  const [name, setName] = useState('Your Flock')

  useFocusEffect(
    React.useCallback(() => {
    const unsubscribe = () => {
      if(photos !== undefined) {
        for (let i =0; i<photos.length; i++){
          let pic = photos[i];
          if (pic !==undefined && pic !== auth.currentUser.photoURL){setEggPicture(pic); break}
          else {
            setEggPicture("https://literaryyard.files.wordpress.com/2017/11/smiling-face-funny-bird-picture.jpg?w=639)"
          )
        }
      }
      }
      else {
        setEggPicture("https://literaryyard.files.wordpress.com/2017/11/smiling-face-funny-bird-picture.jpg?w=639)"
          )
      }
      if(names !== undefined) {
        for (let i =0; i<names.length; i++){
          let name = names[i];
          if (name !==undefined && name !== auth.currentUser.displayName){setName(name); break}
          else {
            setName("Flocker")
        }
      }
      }
      else {
        setName("Your Flock")
      }
      };

    return unsubscribe();
   }, [])
   );

   useEffect(() => {

		const unsubscribe = db
			.collection('chats')
			.doc(id)
			.collection('messages')
			.orderBy('timeStamp', 'desc')
			.onSnapshot((snapshot) =>
				setChatMessages(
					snapshot.docs.map((doc) => ({
						data: doc.data(),
					}))
				)
			);
		return unsubscribe;
	}, [navigation]);


  return (
    <View >
      <ListItem
      containerStyle={{backgroundColor: "#E6E8DA"}}
      onPress={()=>enterChat(id)}
      key ={id}
      topDivider
      bottomDivider>
        <Avatar
          rounded
          source={{
            uri: eggPicture
          }}
        />
        <ListItem.Content >
          <ListItem.Title style={{fontWeight: '800', color: '#354A18'}}>Your Chat With {name}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"
          style={{color: '#354A18'}}>
            {chatMessages?.[0]?.data.message}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );

};

export default EggItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#E6E8DA',
	},
});
