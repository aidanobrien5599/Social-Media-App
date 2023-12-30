import React from 'react';
import {Container, Header} from 'semantic-ui-react';
import LoginForm from './components/LoginForm.js';
import NewAccountButton from './components/NewAccountButton.js';


function Login() {
  return (
   <Container>
    <Header>Real Social Media Website</Header>
    <Header>Sign In Here</Header>
    <LoginForm></LoginForm>
    <NewAccountButton/>
   </Container>
  );
}
export default Login;