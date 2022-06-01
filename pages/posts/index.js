import Head from 'next/head';
import React, { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts.js';
import { getAllPosts } from '../../lib/posts-util.js';

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
