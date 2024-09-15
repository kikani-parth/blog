import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route }) => {
  const { id } = route.params;

  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
