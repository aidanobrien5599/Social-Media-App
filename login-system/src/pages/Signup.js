import React from 'react';
import {Container, Header} from 'semantic-ui-react';
import SignupForm from './components/SignupForm.js';
import BackToLoginButton from './components/BackToLoginButton.js';


function Signup(props) {
  return (
   <Container>
    <Header>Social Media App</Header>
    <Header>Sign Up Here</Header>
    <SignupForm setLoggedInUser={props.setLoggedInUser}></SignupForm>
    <BackToLoginButton/>
   </Container>
  );
}
export default Signup;