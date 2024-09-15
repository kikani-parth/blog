import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    // Shadow for Android
    elevation: 5,
  },
  title: {
    fontSize: 18,
    padding: 10,
  },
  content: {
    padding: 10,
  },
});

export default ShowScreen;
