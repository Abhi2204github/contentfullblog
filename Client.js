import *  as contentful from 'contentful';

const Client = contentful.createClient ({
  space: process.env.REACT_APP_SPACE_ID,
  accesToken: process.env.REACT_APP_ACCES_TOKEN
});

export default Client;