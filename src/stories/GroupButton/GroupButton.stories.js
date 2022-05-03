import React from 'react';
import { storiesOf } from '@storybook/react';
import { GroupButton } from '../../components/GroupButton';
import './GroupButton';

const stories = storiesOf('GroupButton', module);

stories.add('Base Example', () => {
    
  return (
    <>
      <GroupButton
        id='rixun-groupbutton'
        name='test1'
      />
    </>
  )
})