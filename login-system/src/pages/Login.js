import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import LoginForm from './components/LoginForm.js';
import NewAccountButton from './components/NewAccountButton.js';

function Login(props) {
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
          Real Social Media Website
        </Header>
        <Header as="h2" style={{ marginBottom: '20px', color: '#ffffff' }}>
          Sign In Here
        </Header>
        <LoginForm setLoggedInUser={props.setLoggedInUser} />
        <NewAccountButton />
      </div>
    </Container>
  );
}

export default Login;