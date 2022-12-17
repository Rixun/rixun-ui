import { storiesOf } from '@storybook/react';
import { useRef, useState } from 'react';
import { Button } from '../../components/Button';
import './Button.css';

// install these 2 packages to show the icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
stories.add('Button Types With Icons', () => {
  return (
    <>
      <div>
        <h4>Add FontAwesome or other svg icons to Story to show icons</h4>
      </div>
      <Button
        name="Default"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        name="Default"
        type="outline"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
      <hr />
      <Button
        name="Circle"
        corners="circle"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        name="Circle"
        corners="circle"
        type="outline"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
      <hr />
      <Button
        name="Square"
        corners="square"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        name="Square"
        corners="square"
        type="outline"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
      <hr />
      <Button
        name="Link"
        type="link"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        name="Link"
        type="link"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
    </>
  );
});
stories.add('Button Types With icons only', () => {
  return (
    <>
      <Button
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        type="outline"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
      <hr />
      <Button
        corners="circle"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        corners="circle"
        type="outline"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
      <hr />
      <Button
        corners="square"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        corners="square"
        type="outline"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
      <hr />
      <Button
        type="link"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
        iconPosition="left"
      />
      <span style={{ margin: '5px' }} />
      <Button
        type="link"
        // icon={<FontAwesomeIcon icon={faCoffee} />}
      />
    </>
  )
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
    <Button name={`${n}`} key={n} style={{ marginRight: '5px' }} />
  ));
});
stories.add('Ref Button', () => {
  const buttonRef = useRef();
  let n = 0;
  const onClick = () => {
    buttonRef.current.innerText = ++n;
  };
  return (
    <>
      <Button name={`ref`} buttonRef={buttonRef} onClick={onClick} />
    </>
  );
});
