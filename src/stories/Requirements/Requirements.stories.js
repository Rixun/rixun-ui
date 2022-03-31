import React from 'react'
import { storiesOf } from '@storybook/react'

import { Requirements } from '../../components/Requirements'

const stories = storiesOf('Requirement', module);

stories.add('Requirements field', () => {
  return(<Requirements />)
});