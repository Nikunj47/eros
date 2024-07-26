import { graphqlOperation } from 'aws-amplify';
import Button from '@mui/material/Button';
import React from 'react';
// import './styles/styles.css';
// import Sidebar from './components/Sidebar';
// import Form from './components/PostForm.js';
// import Preview from './components/Preview.js'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig)
const App = () => {

  // const fetchData = async () => {
  //     try {
  //         const res = await API.graphql(graphqlOperation(listPosts));
  //         console.log(res);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  return (
      <Authenticator>
        {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <Button onClick={signOut} variant={"outlined"}>Sign out</Button>
              {/*<Button variant="contained">Hello world</Button>;*/}
            </main>
        )}
      </Authenticator>
  );
};

export default withAuthenticator(App);
