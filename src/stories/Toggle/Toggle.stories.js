import { storiesOf } from '@storybook/react';

import { Toggle } from '../../components/Toggle';
import './Toggle.css';

const stories = storiesOf('Toggle', module);

stories.add('Toggle test', () => {
  return (
    <>
      <Toggle />
      <div></div>
    </>
  );
});
