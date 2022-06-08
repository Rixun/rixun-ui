import { storiesOf } from '@storybook/react';
import { useRef, useState } from 'react';
import { Footer } from '../../components/Footer';
import './Footer.css';

const stories = storiesOf('Footer', module);

stories.add('Footer Types', () => {
  return (
    <>
      <Footer />
    </>
  );
});

stories.add('Footer Designs', () => {
  return (
    <>
      <Footer />
    </>
  );
});