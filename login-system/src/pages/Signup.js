import React from 'react';
import {Container, Header} from 'semantic-ui-react';
import SignupForm from './components/SignupForm.js';
import BackToLoginButton from './components/BackToLoginButton.js';


function Signup(props) {
  return (
    <Container
      style={{
        paddingTop: '50px',
        textAlign: 'center',
        backgroundColor: '#68d391', // Bright background color
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '10px', // Rounded corners for the container
      }}
    >
      <div style={{ maxWidth: '300px', margin: '0 auto', padding: '20px' }}>
        <Header as="h1" style={{ marginBottom: '40px', color: '#ffffff' }}>
          Social Media App
        </Header>
        <Header as="h2" style={{ marginBottom: '20px', color: '#ffffff' }}>
          Sign Up Here
        </Header>
    <SignupForm setLoggedInUser={props.setLoggedInUser}></SignupForm>
    <BackToLoginButton/>
      </div>
   </Container>
  );
}
export default Signup;