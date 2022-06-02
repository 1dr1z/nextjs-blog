import Head from 'next/head';
import React, { Fragment } from 'react';
import { getFeaturedPosts } from '../lib/posts-util.js';
import FeaturedPosts from '/components/home-page/featured-posts';
import Hero from '/components/home-page/Hero';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Max's Blog</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
};
export default HomePage;
