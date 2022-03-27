import React, { createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../../components/Input';
import './Input.css';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const ref = createRef();

  const handleOnClick = () => { console.log('handle onClick') }
  const handleOnFocus = () => { console.log('handle onFocus') }
  const handleOnChange = () => { console.log('handle onChange') }

  const handleOnBlur = () => {
    console.log('handle onBlur')

    var x = document.getElementById('rixun-input1');
    x.value = x.value.toUpperCase();
  }

  const handleOnPaste = () => { console.log('handle onPaste') }

  return(
    <>
      <Input
        className='rixun-input-sm storybook-input'
        rixunRef={ref}
        id='rixun-input1'
        name='rixun-input'
        type='text'
        placeholder='First Name'      
        extraProps={{
          onClick: handleOnClick,
          onFocus: handleOnFocus,
          onChange: handleOnChange,
          onBlur: handleOnBlur,
          onPaste: handleOnPaste,
        }}
      />
      <br />
      <Input
        className='rixun-input-sm storybook-input'
        rixunRef={ref}
        id='rixun-input2'
        name='rixun-input'
        type='email'
        placeholder='Email'
        placeholderStyling='placeholderStylingTest'
        extraProps={{
          onClick: handleOnClick,
          onFocus: handleOnFocus,
          onChange: handleOnChange,
          onBlur: handleOnBlur,
          onPaste: handleOnPaste,
        }}
      />
    </>
  )
})