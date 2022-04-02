import { storiesOf } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../../components/Button';
import './Button.css';

const stories = storiesOf('Button', module);

stories.add('Button Types', () => {
  return (
    <>
      <Button name="Default" />
      <hr />
      <Button name="Outline" type="outline" />
      <hr />
      <Button name="Link" type="link" />
    </>
  );
});
stories.add('Button Corner Types', () => {
  return (
    <>
      <Button name="Default" />
      <span style={{ margin: '5px' }} />
      <Button name="Default" type="outline" />
      <hr />
      <Button name="Circle" corners="circle" />
      <span style={{ margin: '5px' }} />
      <Button name="Circle" corners="circle" type="outline" />
      <hr />
      <Button name="Square" corners="square" />
      <span style={{ margin: '5px' }} />
      <Button name="Square" corners="square" type="outline" />
    </>
  );
});
stories.add('ClassName Button', () => {
  return (
    <>
      <Button name="Red Default" className="red-default" />
      <span style={{ margin: '5px' }} />
      <Button name="Red Default" className="red-default" corners="circle" />
      <span style={{ margin: '5px' }} />
      <Button name="Red Default" className="red-default" corners="square" />
      <hr />
      <Button name="Red Outline" className="red-outline" type="outline" />
      <span style={{ margin: '5px' }} />
      <Button
        name="Red Outline"
        className="red-outline"
        type="outline"
        corners="circle"
      />
      <span style={{ margin: '5px' }} />
      <Button
        name="Red Outline"
        className="red-outline"
        type="outline"
        corners="square"
      />
      <hr />
      <Button name="Red Link" className="red-link" type="link" />
    </>
  );
});
stories.add('Disabled Button', () => {
  return (
    <>
      <Button name="Disabled" disabled={true} />
      <span style={{ margin: '5px' }} />
      <Button name="Disabled" disabled={true} corners="circle" />
      <span style={{ margin: '5px' }} />
      <Button name="Disabled" disabled={true} corners="square" />
      <hr />
      <Button name="Disabled" disabled={true} type="outline" />
      <span style={{ margin: '5px' }} />
      <Button name="Disabled" disabled={true} type="outline" corners="circle" />
      <span style={{ margin: '5px' }} />
      <Button name="Disabled" disabled={true} type="outline" corners="square" />
      <hr />
      <Button name="Disabled" disabled={true} type="link" />
    </>
  );
});

stories.add('State change Button', () => {
  const [name, setName] = useState(0);
  return (
    <Button
      name={`${name}`}
      onClick={() => {
        setName((prevState) => ++prevState);
      }}
      // extraProps={{
      //   onClick: () => {
      //     setName((prevState) => ++prevState);
      //   },
      // }}
    />
  );
});

stories.add('Map of Buttons', () => {
  const test = [1, 2, 3];
  return test.map((n) => (
    <>
      <Button name={`${n}`} key={n} />
      <span style={{ margin: '5px' }} />
    </>
  ));
});
