import { storiesOf } from '@storybook/react';
import { Footer } from '../../components/Footer';
import './Footer.css';

const stories = storiesOf('Footer', module);

const btnLinks1 = [
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home',
    },
    {
      to: '2#',
      linkClassName: 'link-col',
      linkName: 'Blog',
    },
    {
      to: '3#',
      linkClassName: 'link-col',
      linkName: 'About',
    },
    {
      to: '4#',
      linkClassName: 'link-col',
      linkName: 'Contact Me',
    },
  ],
];

const btnLinks2 = [
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home',
    },
    {
      to: '2#',
      linkClassName: 'link-col',
      linkName: 'Blog',
    },
    {
      to: '3#',
      linkClassName: 'link-col',
      linkName: 'About',
    },
    {
      to: '4#',
      linkClassName: 'link-col',
      linkName: 'Contact Me',
    },
  ],
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home',
    },
    {
      to: '2#',
      linkClassName: 'link-col',
      linkName: 'Blog',
    },
    {
      to: '3#',
      linkClassName: 'link-col',
      linkName: 'About',
    },
    {
      to: '4#',
      linkClassName: 'link-col',
      linkName: 'Contact Me',
    },
  ],
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home',
    },
    {
      to: '2#',
      linkClassName: 'link-col',
      linkName: 'Blog',
    },
    {
      to: '3#',
      linkClassName: 'link-col',
      linkName: 'About',
    },
    {
      to: '4#',
      linkClassName: 'link-col',
      linkName: 'Contact Me',
    },
  ],
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home',
    },
    {
      to: '2#',
      linkClassName: 'link-col',
      linkName: 'Blog',
    },
    {
      to: '3#',
      linkClassName: 'link-col',
      linkName: 'About',
    },
    {
      to: '4#',
      linkClassName: 'link-col',
      linkName: 'Contact Me',
    },
  ],
];

const btnLinks3 = [
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home',
    },
    {
      to: '2#',
      linkClassName: 'link-col',
      linkName: 'Blog',
    },
    {
      to: '3#',
      linkClassName: 'link-col',
      linkName: 'About',
    },
    {
      to: '4#',
      linkClassName: 'link-col',
      linkName: 'Contact Me',
    },
  ],
  [
    {
      to: '1#',
      linkClassName: 'link-col',
      linkName: 'Home',
    },
    {
      to: '2#',
      linkClassName: 'link-col',
      linkName: 'Blog',
    },
    {
      to: '3#',
      linkClassName: 'link-col',
      linkName: 'About',
    },
    {
      to: '4#',
      linkClassName: 'link-col',
      linkName: 'Contact Me',
    },
  ],
];

stories.add('Footer Basic', () => {
  return (
    <>
      <Footer
        className="footer"
        linkContainerClassName="container-margin"
        linkClassName="link-row-padding"
        position="center"
        layout="row"
        columns={btnLinks1}
      />
    </>
  );
});

stories.add('Footer Column', () => {
  return (
    <>
      <Footer
        className="footer"
        linkContainerClassName="container-margin"
        linkClassName="link-orange-border"
        position="center"
        layout="column"
        columns={btnLinks2}
      />
    </>
  );
});

stories.add('Footer Multiple Columns', () => {
  return (
    <>
      <Footer
        className="footer"
        linkContainerClassName="container-margin"
        linkClassName="link-orange-border"
        position="center"
        layout="column"
        columns={btnLinks3}
      />

      <br />

      <Footer
        className="footer"
        linkContainerClassName="container-margin"
        linkClassName="link-row-padding"
        position="center"
        layout="row"
        columns={btnLinks3}
      />
    </>
  );
});
