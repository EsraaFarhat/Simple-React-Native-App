import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import HomeStack from './HomeStack';
import { Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'


const { Navigator, Screen } = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Navigator tabBarOptions={{
            tabStyle: {backgroundColor: 'purple'},
        }}>
            <Screen name="Home" 
            component={HomeStack} 
            options={{
                tabBarLabel:({focused}) => <Text style={{color: focused ? 'black' : 'white'}}>Home</Text>,
                tabBarIcon: ({focused}) => <FontAwesome name="home" color={focused ? 'black' : 'white'} size={24}/>
            }}
            />
            <Screen name="Profile" 
            component={Profile} 
            options={{
                tabBarLabel:({focused}) => <Text style={{color: focused ? 'black' : 'white'}}>Profile</Text>,
                tabBarIcon: ({focused}) => <FontAwesome name="user" color={focused ? 'black' : 'white'} size={24}/>
            }}
            />
        </Navigator>
    );
}
