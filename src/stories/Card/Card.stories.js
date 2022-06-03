import { storiesOf } from '@storybook/react';
import { useRef, useState } from 'react';

import { Card } from '../../components/Card';
import './Card.css';

const stories = storiesOf('Card', module);

stories.add('Card Types', () => {
  return (
    <>
      <Card />
      <hr />
      <Card type="border" />
      <hr />
      <p>Card of type = empty</p>
      <Card type="empty" />
    </>
  );
});

stories.add('Card Corner Types', () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Card />
        <span style={{ margin: '5px' }} />
        <Card type="border" />
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <Card corners="mid-round" />
        <span style={{ margin: '5px' }} />
        <Card corners="mid-round" type="border" />
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <Card corners="very-round" />
        <span style={{ margin: '5px' }} />
        <Card corners="very-round" type="border" />
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <Card corners="square" />
        <span style={{ margin: '5px' }} />
        <Card corners="square" type="border" />
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <Card corners="circle" />
        <span style={{ margin: '5px' }} />
        <Card corners="circle" type="border" />
      </div>
    </>
  );
});

stories.add('ClassName Cards', () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Card className="blue-card" />
        <span style={{ margin: '5px' }} />
        <Card className="blue-shadow-card" />
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        <Card className="blue-card" />
        <span style={{ margin: '5px' }} />
        <Card className="blue-border-card" type="border" />
      </div>
      <hr />
      <p>Card of type = empty</p>
      <Card className="blue-card" type="empty" />
    </>
  );
});
