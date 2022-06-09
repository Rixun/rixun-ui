import { storiesOf } from '@storybook/react';
import { useRef, useState } from 'react';
import { Footer } from '../../components/Footer';
import './Footer.css';

const stories = storiesOf('Footer', module);

const footerLinks = (
  <>
    <p>Home</p>
    <p>About Me</p>
    <p>Contact</p>
  </>
);

const footerLinks2 = (
  <>
    <ul>
      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
      <li>test4</li>
      <li>test5</li>
    </ul>
    <ul>
      <li>test1</li>
      <li>test2</li>
    </ul>
  </>
);

stories.add('Footer Styles', () => {
  return (
    <>
      <Footer
        className="footer"
        position="left"
      >
        {footerLinks}
      </Footer>

      <br /><br />

      <Footer
        className="footer"
        position="center"
      >
        {footerLinks}
      </Footer>

      <br /><br />

      <Footer
        className="footer"
        position="right"
      >
        {footerLinks}
      </Footer>

      <br /><br />

      <Footer
        className="footer"
      >
        {footerLinks2}
      </Footer>
    </>
  );
});

stories.add('Footer Multiple Columns', () => {
  return (
    <>
      <Footer
        className="footer"
      >
        <div className="column col1">
          {footerLinks}
        </div>
        <div className="column col2">
          {footerLinks}
        </div>
        <div className="column col3">
          {footerLinks}
        </div>
      </Footer>
    </>
  );
});
