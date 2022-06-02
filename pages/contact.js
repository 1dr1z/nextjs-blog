import Head from 'next/head';
import React, { Fragment } from 'react';
import ContactForm from '/components/contact/contact-form.js';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name='description' content='Send me your messages' />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
