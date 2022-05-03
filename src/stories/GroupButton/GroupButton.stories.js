import React from 'react';
import { storiesOf } from '@storybook/react';
import { GroupButton } from '../../components/GroupButton';
import './GroupButton.css';

const stories = storiesOf('GroupButton', module);

stories.add('Base Example', () => {

  const onChangeBtn = () => {
    console.log('Testing ~ Groupbtn onchange event')
  }

  const groupBtn = [
    {id: 'option1', name: 'option1', placeholder: 'Option 1', onChange: onChangeBtn()},
    {id: 'option2', name: 'option2', placeholder: 'Option 2', onChnage: onChangeBtn()},
    {id: 'option3', name: 'option3', placeholder: 'Option 3', onChange: onChangeBtn()},
  ]
    
  return (
    <div className='groupbutton-form'>
      {groupBtn.map((btn) => (
        <GroupButton
          key={btn.id}
          className='groupbutton-btn'
          id={btn.id}
          name={btn.name}
          value={btn.name}
          placeholder={btn.placeholder}
          onChange={btn.onChangeBtn}
        />
      ))}
    </div>
  )
})