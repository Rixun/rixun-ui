import React, { createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from '../../components/Dropdown';
import './Dropdown.css';

const stories = storiesOf('Dropdown', module);

stories.add('Basic Events', () => {
  const ref = createRef();

  return (
    <>
      <Dropdown
        className='dropdown-test1'
        rixunRef={ref}
        id='rixun-dropdown1'
        name='rixun-dropdown1'
        placeholder='Select option'
      >
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
        <option value='option4'>Option 4</option>
        <option value='option5'>Option 5</option>
      </Dropdown>

      <br /><br />

      <Dropdown
        className='dropdown-test1'
        rixunRef={ref}
        id='rixun-dropdown2'
        name='rixun-dropdown2'
        placeholder='Car Manufacture'
      >
        <option value='option1'>Honda</option>
        <option value='option2'>Mazda</option>
        <option value='option3'>Nissan</option>
        <option value='option4'>Toyota</option>
        <option value='option5'>Suzuki</option>
      </Dropdown>
    </>
  )
})