// Import React
import React from 'react';
// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  S,
  Slide,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  Notes
} from 'spectacle';

import Profile from './profiles';
import Twitter from './twitter';
import Note from './notes';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import './style.css';

const images = {
  netlifyFull: require('../assets/netlify-full.svg'),
  domains: require('../assets/domains.svg'),
  forms: require('../assets/forms.svg'),
  identity: require('../assets/identity.svg'),
  splitTesting: require('../assets/splitTesting.svg'),
  pr: require('../assets/pr.svg'),
  auth: require('../assets/auth.svg'),
  notification: require('../assets/notification.svg'),
  toml: require('../assets/netlifytoml.png'),
  john: require('../assets/john.jpg'),
  jl: require('../assets/jl.jpg'),
  free: require('../assets/free.png'),
  pro: require('../assets/pro.png'),
  business: require('../assets/business.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#e74c3c',
    secondary: '#ecf0f1',
    tertiary: '#85144b',
    quaternary: '#001f3f',
    dark: '#080F0F'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const featureImageSize = 800;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme} progress="bar">
        <Slide bgColor="tertiary">
          <Note presenter="john" notes={["Note 1", "Note 2", "Note 3"]}/>
          <Heading size={5} textColor="secondary">
            Simplify web deployments with
          </Heading>
          <Heading textColor="primary" lineHeight={1} fit>
            Netlify
          </Heading>
          <Twitter />
        </Slide>
        <Profile
          name="Johnathan MEUNIER"
          job="FullStack Engineer JS"
          website="Johnathan.fr"
          twitter="j7n__"
          github="johnmeunier"
          pic={images.john}
        />
        <Profile
          name="Jean-Lou PIERME"
          job="FullStack Software Engineer"
          website="jlou.fr"
          twitter="jloupiote"
          github="jlou"
          pic={images.jl}
        />
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Existing Solutions
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Deploying by hand
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Redundant and error prone
          </Heading>
          <List>
            <Appear>
              <ListItem>Build locally</ListItem>
            </Appear>
            <Appear>
              <ListItem>Deploy via ftp (or something other tool)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Time consuming &amp; error-prone</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Github Pages
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Simple, but limited
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <S type="bold">Requires</S> a Github repository
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Generated code must be checked in</ListItem>
            </Appear>
            <Appear>
              <ListItem>Single version online</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            Continuous integration tools
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Travis, Azure pipelines, etc...
          </Heading>
          <List>
            <Appear>
              <ListItem>Can build and deploy automatically</ListItem>
            </Appear>
            <Appear>
              <ListItem>Requires an external hosting solution</ListItem>
            </Appear>
            <Appear>
              <ListItem>Can be complicated to setup</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.netlifyFull} width={1000} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="primary">
            Demo 1
          </Heading>
          <List textColor="dark">
            <ListItem>Creation of a new project</ListItem>
            <ListItem>Versionning of this new project on GitHub</ListItem>
            <ListItem>Creation of a site on Netlify</ListItem>
            <ListItem>Deployment</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Custom domains & DNS configuration
          </Heading>
          <Image src={images.domains} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Split testing
          </Heading>
          <Image src={images.splitTesting} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Pull request deployment
          </Heading>
          <Image src={images.pr} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Notification
          </Heading>
          <Image src={images.notification} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Forms
          </Heading>
          <Image src={images.forms} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Identity
          </Heading>
          <Image src={images.identity} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Auth
          </Heading>
          <Image src={images.auth} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Demo 2
          </Heading>
          <List textColor="dark">
            <ListItem>Domain changing</ListItem>
            <ListItem>Split visit on two branches</ListItem>
            <ListItem>Demonstration of continuous integration</ListItem>
            <ListItem>Form storing</ListItem>
            <ListItem>Notification</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit textColor="secondary" caps>
            But also...
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} fit textColor="primary" caps>
            Configuration as Code
          </Heading>
          <Image src={images.toml} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary" transition={['zoom', 'slide']}>
          <Heading size={1} fill textColor="primary">
            Pricing
          </Heading>
          <Heading size={5} fill>
            Free
          </Heading>
          <List fit textColor="dark">
            <ListItem>1 user</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" transition={['zoom', 'slide']}>
          <Heading size={1} fill textColor="primary">
            Pricing
          </Heading>
          <Heading size={5} fill>
            45$/mo
          </Heading>
          <List fit textColor="dark">
            <ListItem>5 users</ListItem>
            <ListItem>Owner / Collaborator roles</ListItem>
            <ListItem fit>Password Protection</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" transition={['zoom', 'slide']}>
          <Heading size={1} fill textColor="primary">
            Pricing
          </Heading>

          <Heading size={5} fill>
            290$/mo
          </Heading>
          <List fit textColor="dark">
            <ListItem>10 user</ListItem>
            <ListItem>Multiple roles</ListItem>
            <ListItem>Role-based access control</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" transition={['zoom', 'slide']}>
          <Heading size={1} lineHeight={2} fill textColor="primary">
            Pricing
          </Heading>
          <Table textColor="dark">
            <TableRow>
              <TableHeaderItem>Free</TableHeaderItem>
              <TableHeaderItem textColor="dark">45$/mo</TableHeaderItem>
              <TableHeaderItem textColor="dark">290$/mo</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>1 User</TableItem>
              <TableItem>5 Users</TableItem>
              <TableItem>10 Users</TableItem>
            </TableRow>
            <TableRow>
              <TableItem />

              <TableItem>Owner / collaborator roles</TableItem>
              <TableItem>Multiple roles</TableItem>
            </TableRow>
            <TableRow>
              <TableItem />
              <TableItem>Password protection</TableItem>
              <TableItem>Role-based access control</TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide bgColor="secondary" transition={['zoom', 'slide']}>
          <Heading size={1} lineHeight={2} fill textColor="primary">
            Pricing
          </Heading>
          <Table textColor="dark">
            <TableRow>
              <TableItem>
                <Image src={images.free} />
              </TableItem>
              <TableItem>
                <Image src={images.pro} />
              </TableItem>
              <TableItem>
                <Image src={images.business} />
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide>
          <Heading textColor="secondary" fit>
            Why use Netlify:
          </Heading>
          <Appear>
            <Heading textAlign="left" size={3} lineHeight={3} textColor="secondary">
              &#10003; &nbsp; Automatic build
            </Heading>
          </Appear>
          <Appear>
            <Heading textAlign="left" size={4} lineHeight={1} textColor="secondary">
              &#10003; &nbsp;Automatic deployment
            </Heading>
          </Appear>
          <Appear>
            <Heading textAlign="left" size={3} lineHeight={3} textColor="secondary">
              &#10003; &nbsp;Previews
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="secondary">
            Simplify web deployments with Netlify
          </Heading>
          <Heading textColor="secondary" fit>
            Thanks!
          </Heading>
          <Twitter />
        </Slide>
      </Deck>
    );
  }
}
