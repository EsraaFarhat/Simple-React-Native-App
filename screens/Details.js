import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';


export default function Details(){
    const { params } = useRoute();

    return(
        <View style={styles.container}>
            <Image style={styles.image}
                    source={{ uri: 'https://source.unsplash.com/random' }}
            />
            <Text style={{fontSize: 18, fontWeight:'bold', margin:15}}>{params.item.title}</Text>
            <Text style={{fontSize: 16}}>{params.item.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        paddingTop: Constants.statusBarHeight,
        padding: 40,
    },
    image: {
      width: 300,
      height: 200,
      borderRadius: 30,
    },
  });
  