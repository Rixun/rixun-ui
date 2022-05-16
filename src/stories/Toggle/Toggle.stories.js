import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Toggle } from '../../components/Toggle';
import './Toggle.css';

const stories = storiesOf('Toggle', module);

stories.add('Toggle Types', () => {
  const [active, setActive] = useState();
  const [active2, setActive2] = useState();
  return (
    <>
      <Toggle
        active={active}
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
      />
      <hr />
      <Toggle
        active={active2}
        type="no-border"
        onClick={() => {
          setActive2((prevState) => !prevState);
        }}
      />
    </>
  );
});

stories.add('Toggle Corner Types', () => {
  const [active, setActive] = useState();
  const [active2, setActive2] = useState();
  const [active3, setActive3] = useState();
  return (
    <>
      <div className="flex-row">
        <Toggle
          active={active}
          onClick={() => {
            setActive((prevState) => !prevState);
          }}
        />
        <Toggle
          active={active}
          type="no-border"
          onClick={() => {
            setActive((prevState) => !prevState);
          }}
        />
      </div>
      <hr />
      <div className="flex-row">
        <Toggle
          active={active2}
          corners="square"
          onClick={() => {
            setActive2((prevState) => !prevState);
          }}
        />
        <Toggle
          active={active2}
          corners="square"
          type="no-border"
          onClick={() => {
            setActive2((prevState) => !prevState);
          }}
        />
      </div>
      <hr />
      <div className="flex-row">
        <Toggle
          active={active3}
          corners="round"
          onClick={() => {
            setActive3((prevState) => !prevState);
          }}
        />
        <Toggle
          active={active3}
          corners="round"
          type="no-border"
          onClick={() => {
            setActive3((prevState) => !prevState);
          }}
        />
      </div>
    </>
  );
});

stories.add('Toggle ClassName', () => {
  const [active, setActive] = useState();
  const [active2, setActive2] = useState();
  const [active3, setActive3] = useState();
  const [active4, setActive4] = useState();
  return (
    <>
      <p>Mixed library and user provided classNames</p>
      <div className="flex-row">
        <Toggle
          active={active}
          className="toggle-color"
          onClick={() => {
            setActive((prevState) => !prevState);
          }}
        />
        <Toggle
          active={active}
          className="toggle-nb-color"
          type="no-border"
          onClick={() => {
            setActive((prevState) => !prevState);
          }}
        />
      </div>
      <hr />
      <p>switch ClassNames</p>
      <div className="flex-row">
        <Toggle
          active={active2}
          switchClassName="toggle-switch-color"
          corners="square"
          onClick={() => {
            setActive2((prevState) => !prevState);
          }}
        />
        <Toggle
          active={active2}
          switchClassName="toggle-switch-color"
          corners="square"
          type="no-border"
          onClick={() => {
            setActive2((prevState) => !prevState);
          }}
        />
      </div>
      <hr />
      <p>Using purely user provided classNames</p>
      <div className="flex-row">
        <Toggle
          active={active3}
          containerClassName="toggle-container-class"
          className="toggle-main-class"
          corners="round"
          onClick={() => {
            setActive3((prevState) => !prevState);
          }}
        />
        <Toggle
          active={active3}
          containerClassName={active3 ? 'toggle-container-class' : ''}
          className="toggle-main-nb-class"
          corners="round"
          type="no-border"
          onClick={() => {
            setActive3((prevState) => !prevState);
          }}
        />
      </div>
      <hr />
      <p>Large toggle</p>
      <div className="flex-row">
        <Toggle
          active={active4}
          containerClassName="toggle-size-class"
          corners="round"
          onClick={() => {
            setActive4((prevState) => !prevState);
          }}
        />
        <Toggle
          active={active4}
          containerClassName={'toggle-size-class'}
          corners="round"
          type="no-border"
          onClick={() => {
            setActive4((prevState) => !prevState);
          }}
        />
      </div>
    </>
  );
});

stories.add('Toggle disabled', () => {
  const [active, setActive] = useState();
  const [active2, setActive2] = useState();
  return (
    <>
      <Toggle
        active={active}
        disabled={true}
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
      />
      <hr />
      <Toggle
        active={active2}
        disabled={true}
        type="no-border"
        onClick={() => {
          setActive2((prevState) => !prevState);
        }}
      />
    </>
  );
});
