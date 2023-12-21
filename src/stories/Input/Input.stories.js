import React, { createRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../../components/Input';
import './Input.css';

const stories = storiesOf('Input', module);

stories.add('Basic Events', () => {
  const [value, setValue] = useState('');
  const ref = createRef();

  const handleOnClick = () => {
    console.log('handle onClick');
  };
  const handleOnFocus = () => {
    console.log('handle onFocus');
  };
  const handleOnChange = (e) => {
    console.log('handle onChange');
    setValue(e.target.value);
  };
  const handleOnBlur = () => {
    console.log('handle onBlur');
  };
  const handleOnPaste = () => {
    console.log('handle onPaste');
  };

  return (
    <>
      <Input
        className="rixun-input storybook-input"
        rixunRef={ref}
        id="rixun-input1"
        name="rixun-input"
        type="text"
        value={value}
        placeholder="First Name"
        onClick={handleOnClick}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onPaste={handleOnPaste}
      />
      <br />
      <Input
        className="rixun-input-sm storybook-input"
        rixunRef={ref}
        id="rixun-input2"
        name="rixun-input"
        type="text"
        value={value}
        placeholder="Overriding placeholder font size"
        placeholderClassName="placeholderStyling"
        onClick={handleOnClick}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onPaste={handleOnPaste}
      />
    </>
  );
});

stories.add('onBlur capitals', () => {
  const handleOnBlur = () => {
    var x = document.getElementById('rixun-input1');
    x.value = x.value.toUpperCase();
  };

  return (
    <>
      <Input
        className="rixun-input storybook-input"
        id="rixun-input1"
        name="rixun-input"
        type="text"
        placeholder="First Name"
        onBlur={handleOnBlur}
      />
    </>
  );
});

stories.add('Input Sizes', () => {
  const sizes = ['small', 'medium', 'large'];

  return sizes.map((size) => (
    <>
      <Input
        className="rixun-input storybook-input"
        id="rixun-input1"
        name="rixun-input"
        size={size}
        type="text"
        placeholder={size}
      />
      <br />
    </>
  ));
});
