import React, { createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../components/Input';
import './styles.css';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const ref = createRef();
  
  return(
    <Input
      className={'storybook-input'}
      ref={ref}
      id={'rixun-input'}
      key={'rixun-input'}
      placeholder={'First Name'}
      extraProps={{
      }}
    />
  )
});