import { storiesOf } from '@storybook/react';
import { useRef, useState } from 'react';
import { Footer } from '../../components/Footer';
import './Footer.css';

const stories = storiesOf('Footer', module);

const btnLinks = [
  [{to: '1#', linkClassName: 'nav-link', btnClassName: 'btn-link1', btnName: 'Home'}],
  [{to: '2#', linkClassName: 'nav-link', btnClassName: 'btn-link2', btnName: 'Blog'}],
  [{to: '3#', linkClassName: 'nav-link', btnClassName: 'btn-link3', btnName: 'About'}],
  [{to: '4#', linkClassName: 'nav-link', btnClassName: 'btn-link4', btnName: 'Contact Me'}]
];

const btnLinks2 = [
  [{to: '1#', linkClassName: 'nav-link', btnClassName: 'btn-link5', btnName: 'Home2'}],
  [{to: '2#', linkClassName: 'nav-link', btnClassName: 'btn-link6', btnName: 'Blog2'}],
  [{to: '3#', linkClassName: 'nav-link', btnClassName: 'btn-link7', btnName: 'About2'}],
  [{to: '4#', linkClassName: 'nav-link', btnClassName: 'btn-link8', btnName: 'Contact Me2'}]
];

const multiColV2 = (
  <ul>
    <li>Home</li>
    <li>Blog</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
);

stories.add('Footer Basic', () => {
  return (
    <>
      <Footer
        className="footer"
        position="center"
        columns={btnLinks}
      />
    </>
  );
});

stories.add('Footer Vertical Column', () => {
  return (
    <>
      <Footer
        className="footer"
        position="center"
        layout="vertical"
        columns={btnLinks}
      />
    </>
  );
});

stories.add('Footer Multiple Columns', () => {
  return (
    <>
      <Footer
        className="footer"
        position="center"
        // layout="vertical"
        columns={[btnLinks, btnLinks2]}
      />
    </>
  );
});

stories.add('Footer Multiple Columns V2', () => {
  return (
    <>
      <Footer
        className="footer"
      >
        <div className="column col1">
          {multiColV2}
        </div>
        <div className="column col2">
          {multiColV2}
        </div>
        <div className="column col3">
          {multiColV2}
        </div>
      </Footer>
    </>
  );
});