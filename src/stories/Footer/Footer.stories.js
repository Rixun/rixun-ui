import { storiesOf } from '@storybook/react';
import { useRef, useState } from 'react';
import { Footer } from '../../components/Footer';
import './Footer.css';

const stories = storiesOf('Footer', module);

const btnLinks = [
  [
    {
      to: '1#',
      linkClassName: 'nav-link',
      btnClassName: 'btn-link1',
      btnName: 'Home',
    },
  ],
  [
    {
      to: '2#',
      linkClassName: 'nav-link',
      btnClassName: 'btn-link2',
      btnName: 'Blog',
    },
  ],
  [
    {
      to: '3#',
      linkClassName: 'nav-link',
      btnClassName: 'btn-link3',
      btnName: 'About',
    },
  ],
  [
    {
      to: '4#',
      linkClassName: 'nav-link',
      btnClassName: 'btn-link4',
      btnName: 'Contact Me',
    },
  ],
];

const btnLinks2 = [
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home1',
    },
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home2',
    },
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home3',
    },
  ],
  [
    {
      to: '1#',
      linkClassName: 'link-row',
      linkName: 'Home4',
    },
    {
      to: '1#',
      linkClassName: 'link-row',
      linkName: 'Home5',
    },
    {
      to: '1#',
      linkClassName: 'link-row',
      linkName: 'Home6',
    },
  ],
  [
    {
      to: '1#',
      linkClassName: 'nav-link',
      linkName: 'Home7',
    },
  ],
];

stories.add('Footer Basic', () => {
  return (
    <>
      <Footer className="footer" position="center" columns={btnLinks} />
    </>
  );
});

stories.add('Footer Vertical Column', () => {
  return (
    <>
      <Footer
        className="footer"
        position="left"
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
        // layout="vertical-left"
        columns={btnLinks2}
      />

      <br />

      <Footer
        className="footer"
        position="center"
        layout="vertical-right"
        columns={btnLinks2}
      />
    </>
  );
});
