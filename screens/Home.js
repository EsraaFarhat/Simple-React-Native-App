import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';


export default function Home(){
    const { navigate } = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=> navigate('Posts')}>
                <Text style={{color: 'white', fontSize:20}}>GET POSTS</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple', 
        width: 390, 
        height:50,
    },
  });
  