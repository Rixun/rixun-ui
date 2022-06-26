import { storiesOf } from '@storybook/react';
import { useEffect, useRef, useState } from 'react';

import { Checkbox } from '../../components/Checkbox';
import './Checkbox.css';

const stories = storiesOf('Checkbox', module);

stories.add('Checkbox Corners', () => {
  return (
    <>
      <Checkbox />
      <hr />
      <Checkbox corners="square" />
      <hr />
      <Checkbox corners="circle" />
    </>
  );
});

stories.add('Checkbox animated', () => {
  return (
    <>
      <Checkbox animated={true} />
      <hr />
      <Checkbox animated={true} corners="square" />
      <hr />
      <Checkbox animated={true} corners="circle" />
    </>
  );
});
stories.add('State change Checkbox', () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  useEffect(() => {
    console.log(checked, checked2, checked3);
  }, [checked, checked2, checked3]);
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <hr />
      <Checkbox
        corners="square"
        checked={checked2}
        onChange={(e) => {
          setChecked2(e.target.checked);
        }}
      />
      <hr />
      <Checkbox
        corners="circle"
        checked={checked3}
        onChange={(e) => {
          setChecked3(e.target.checked);
        }}
      />
    </>
  );
});

stories.add('ClassName Checkbox', () => {
  return (
    <>
      <Checkbox
        animated={true}
        className="checkbox-red"
        tickClassName="tick-red"
      />
      <hr />
      <Checkbox
        corners="square"
        className="checkbox-red"
        tickClassName="tick-red"
      />
      <hr />
      <Checkbox
        corners="circle"
        className="checkbox-red"
        tickClassName="tick-red"
      />
    </>
  );
});
stories.add('Disabled Checkbox', () => {
  return (
    <>
      <Checkbox disabled={true} />
      <hr />
      <Checkbox corners="square" disabled={true} />
      <hr />
      <Checkbox corners="circle" disabled={true} />
    </>
  );
});
