import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { GroupButton } from '../../components/GroupButton';
import { Button } from '../../components/Button';
import './GroupButton.css';

const stories = storiesOf('GroupButton', module);

stories.add('Base example', () => {
  const handleOnChangeBtn = (e) => { console.log(`GroupButton onChange event for: (${e.target.value})`); }

  const groupBtn = [
    {id: 'option1', placeholder: 'Option 1', onChange: (e) => handleOnChangeBtn(e)},
    {id: 'option2', placeholder: 'Option 2', onChange: (e) => handleOnChangeBtn(e)},
    {id: 'option3', placeholder: 'Option 3', onChange: (e) => handleOnChangeBtn(e)}
  ]
  
  return (
    <div className='groupbutton-form'>
      {groupBtn.map((btn) => (
        <GroupButton
          key={btn.id}
          id={btn.id}
          name='groupbtn'
          value={btn.placeholder}
          placeholder={btn.placeholder}
          onChange={btn.onChange}
        />
      ))}
    </div>
  )
});

stories.add('Display selection value', () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selection, setSelection] = useState('');

  const handleOnChangeBtn = (e) => { setSelectedOption(e.target.value); }
  const handleOnSubmit = () => { setSelection(selectedOption); }

  const groupBtn = [
    {id: 'csharp', placeholder: 'C#', onChange: (e) => handleOnChangeBtn(e)},
    {id: 'cpp', placeholder: 'C++', onChange: (e) => handleOnChangeBtn(e)},
    {id: 'c', placeholder: 'C', onChange: (e) => handleOnChangeBtn(e)},
    {id: 'python', placeholder: 'Python', onChange: (e) => handleOnChangeBtn(e)},
    {id: 'javascript', placeholder: 'JavaScript', onChange: (e) => handleOnChangeBtn(e)}
  ]
  
  return (
    <div className='groupbutton-form'>
      {groupBtn.map((btn) => (
        <GroupButton
          key={btn.id}
          id={btn.id}
          name='language'
          value={btn.placeholder}
          placeholder={btn.placeholder}
          onChange={btn.onChange}
        />
      ))}

      <br />

      <Button name='Choose a language' onClick={handleOnSubmit} />
      <p>Chosen language: {selection !== '' ? selection : ''}</p>
    </div>
  )
});