import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';



export default function Posts(){
    const [posts, setPosts] = useState([]);
    const { navigate } = useNavigation();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((json) => setPosts(json))
          .catch((error) => console.error(error))
      }, []);

      const Item = ({ item, onPress}) => {
        return (
            <TouchableOpacity style={{margin: 10}} onPress={onPress}>
            <Image style={styles.image}
                    source={{ uri: 'https://source.unsplash.com/random' }}
            />
            <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.title}</Text> 
        </TouchableOpacity>
        );
      };
    
      const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={()=> navigate('Details', { item})}
          />
        );
      };

    return(
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(post) => post.id}
            />
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
  