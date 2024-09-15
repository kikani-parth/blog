import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  const handleOnSubmit = (title, content) => {
    addBlogPost(title, content, () => {
      navigation.navigate('Index');
    });
  };

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        handleOnSubmit(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
