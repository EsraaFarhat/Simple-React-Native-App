import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5, Ionicons, MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';


const imageBackground = {uri: "https://i.picsum.photos/id/377/4884/3256.jpg?hmac=OLVw864UkoqYrrRmC1Xh5-5DtczeP7iEZKMlv1YLwac"}
const image = {uri: "https://avatarfiles.alphacoders.com/259/25909.png"}

export default function Profile(){
    const myData = {
        name: "Esraa Farhat",
        address: "Alex",
        mobile: "+2 012 345 6789",
        mail: "esraafarhat97@gmail.com",
        facebook: "esraa_farhat",
        twitter: "esraafarhat",
    }
    return(
        <View>
            <View style={{ alignItems: 'center'}}>
            <ImageBackground blurRadius={5} source={imageBackground} style={styles.backgroungImage}>
                <Image source={image} style={styles.avatar}></Image>
                <Text style={styles.text}>{myData.name}</Text>
                <Text style={styles.text}><Entypo name="location-pin" size={30} color="white" />{myData.address}</Text>
            </ImageBackground>
            </View>

            <View style={styles.container}>
                <FontAwesome5 name="phone-alt" size={26} color="purple" />    
                <Text style={styles.details}>{myData.mobile}</Text>
            </View>

            <View style={styles.container}>
                <Ionicons name="ios-mail-sharp" size={26} color="purple" />   
                <Text style={styles.details}>{myData.mail}</Text>
            </View>

            <View style={styles.container}>
                <MaterialIcons name="facebook" size={26} color="purple" />
                <Text style={styles.details}>{myData.facebook}</Text>
            </View>

            <View style={styles.container}>
                <AntDesign name="twitter" size={26} color="purple" />
                <Text style={styles.details}>{myData.twitter}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        margin: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        padding: 10
    },
    backgroungImage:{
        width: 500,
        height: 420,
    },
    avatar: {
      width: 180,
      height: 180,
      borderRadius: 995,
      marginLeft: 160,
      marginTop: 90
    },
    text: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        margin: 5,
    },
    details:{
        fontSize: 22,
        color: "black",
        marginLeft: 50
    }
  });