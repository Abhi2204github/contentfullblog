import *  as contentful from 'contentful';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Client = contentful.createClient ({
  space: process.env.REACT_APP_SPACE_ID,
  environment: 'master',
  accessToken: process.env.REACT_APP_ACCES_TOKEN
});

export default Client;