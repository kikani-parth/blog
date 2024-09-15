import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(BlogContext);

  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
          <MaterialIcons
            name="mode-edit"
            size={24}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
