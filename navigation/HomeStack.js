import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet, View } from 'react-native';
import Home from "../screens/Home";
import Details from "../screens/Details";
import Posts from "../screens/Posts";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
    const { goBack } = useNavigation();

    return (
        <Navigator 
        screenOptions={{
            headerTitle: () => <Text style={styles.title}>BLOGPOST<MaterialCommunityIcons name="post-outline" size={24} color="white" /></Text>,
            headerStyle: {backgroundColor: 'purple'}
        }}>
            <Screen name="Home" component={Home}/>
            <Screen name="Posts" 
            component={Posts}
            options={{
                headerLeft: () => <Text style={styles.back} onPress={()=> goBack()}>Back</Text>,
            }}/>
            <Screen name="Details" 
            component={Details} 
            options={{
                headerTitle: () => <Text style={styles.title}>Details</Text>,
                headerLeft: () => <Text style={styles.back} onPress={()=> goBack()}>Back</Text>,
            }}/>
        </Navigator>
    );
}

const styles = StyleSheet.create({
    title:{
        color: 'white', 
        fontSize:26, 
        paddingLeft: 5,
    },
    back: {
        color: 'white', 
        fontSize:18, 
        paddingLeft: 10,
    },
  });
  