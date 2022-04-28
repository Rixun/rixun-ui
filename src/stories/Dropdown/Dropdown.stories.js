import React, { createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from '../../components/Dropdown';
import './Dropdown.css';

const stories = storiesOf('Dropdown', module);

const dropdownOptions = (
  <>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
  </>
)

const testDropdownOptions = [
  'testing1', 'testing2', 'testing3'
]

stories.add('Base Examples', () => {
  const ref = createRef();

  return (
    <>
      <Dropdown
        name='rixun-dropdown1'
        placeholder='Square corners'
        corners='square'
      >
        { dropdownOptions }
      </Dropdown>

      <br /><br />

      <Dropdown
        name='rixun-dropdown2'
        placeholder='Round corners'
        corners='round'
      >
        { dropdownOptions }
      </Dropdown>
    </>
  )
})

stories.add('Hoverable dropdown', () => {
  const ref = createRef();

  return (
    <>
      <Dropdown
        rixunRef={ref}
        id='rixun-dropdown1'
        name='rixun-dropdown1'
        placeholder='Select option'
        corners='square'
        hover={true}
      >
        { testDropdownOptions }
      </Dropdown>
    
      <br /><br />

      <Dropdown
        rixunRef={ref}
        id='rixun-dropdown2'
        name='rixun-dropdown2'
        placeholder='Select option'
        corners='round'
        hover={true}
      >
        { testDropdownOptions }
      </Dropdown>
    </>
  )
})