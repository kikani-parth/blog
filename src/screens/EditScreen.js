import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { state, editBlogPost } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  const handleOnSubmit = (id, title, content) => {
    editBlogPost(id, title, content, () => {
      navigation.goBack();
    });
  };

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => handleOnSubmit(id, title, content)}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
