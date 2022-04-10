import { storiesOf } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import './Modal.css';

const stories = storiesOf('Modal', module);

stories.add('Modal Types', () => {
  const [defaultModal, setDefaultModal] = useState(false);

  const onToggleDefault = () => {
    setDefaultModal((prevState) => !prevState);
  };
  const [transparentModal, setTransparentModal] = useState(false);

  const onToggleTransparent = () => {
    setTransparentModal((prevState) => !prevState);
  };
  const [noBoxModal, setNoBoxModal] = useState(false);

  const onToggleNoBox = () => {
    setNoBoxModal((prevState) => !prevState);
  };
  return (
    <>
      <Button name="Enable Default Modal" onClick={onToggleDefault} />
      <Modal active={defaultModal} backgroundOnClick={onToggleDefault} />
      <hr />
      <Button name="Enable Transparent Modal" onClick={onToggleTransparent} />
      <Modal
        active={transparentModal}
        backgroundOnClick={onToggleTransparent}
        boxType="transparent"
      />
      <hr />
      <Button name="Enable No Box Modal" onClick={onToggleNoBox} />
      <Modal
        active={noBoxModal}
        backgroundOnClick={onToggleNoBox}
        boxType="none"
      />
      <hr />
    </>
  );
});
stories.add('Modal Corners', () => {
  const [defaultModal, setDefaultModal] = useState(false);

  const onToggleDefault = () => {
    setDefaultModal((prevState) => !prevState);
  };
  const [squareModal, setSquareModal] = useState(false);

  const onTogglSquare = () => {
    setSquareModal((prevState) => !prevState);
  };
  const [circleModal, setCircleModal] = useState(false);

  const onToggleCircle = () => {
    setCircleModal((prevState) => !prevState);
  };
  return (
    <>
      <Button name="Enable Default Modal" onClick={onToggleDefault} />
      <Modal active={defaultModal} backgroundOnClick={onToggleDefault} />
      <hr />
      <Button name="Enable Square Modal" onClick={onTogglSquare} />
      <Modal
        active={squareModal}
        backgroundOnClick={onTogglSquare}
        corners="square"
      />
      <hr />
      <Button name="Enable Cricle Modal" onClick={onToggleCircle} />
      <Modal
        active={circleModal}
        backgroundOnClick={onToggleCircle}
        corners="circle"
      />
      <hr />
    </>
  );
});
stories.add('Content Modal', () => {
  const [defaultModal, setDefaultModal] = useState(false);

  const onToggleDefault = () => {
    setDefaultModal((prevState) => !prevState);
  };
  return (
    <>
      <Button name="Enable Content Modal" onClick={onToggleDefault} />
      <Modal active={defaultModal} backgroundOnClick={onToggleDefault}>
        <Button name="Close Content Modal" onClick={onToggleDefault} />
      </Modal>
    </>
  );
});
stories.add('ClassName Modal', () => {
  const [defaultModal, setDefaultModal] = useState(false);

  const onToggleDefault = () => {
    setDefaultModal((prevState) => !prevState);
  };
  return (
    <>
      <Button name="Enable ClassName Modal" onClick={onToggleDefault} />
      <Modal
        active={defaultModal}
        backgroundOnClick={onToggleDefault}
        className="modal"
      >
        <Button name="Close ClassName Modal" onClick={onToggleDefault} />
      </Modal>
    </>
  );
});
