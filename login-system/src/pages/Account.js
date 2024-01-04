import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, Container, List, ListItem, Divider } from 'semantic-ui-react';
import SignOutButton from './components/SignOutButton.js';
import Nav from './components/Nav.js'


function Account(props) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/get_account/' + props.currentAccount)
      .then((resp) => {
        setUserData(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        return(
            <Header>Error occured. Please log in again </Header> 

        )
        // Handle error here if needed
      });
  }, [props.currentAccount]); // Make sure to add dependencies to the useEffect array
  if(userData === null){
    return<h1>No account found</h1>
  }
  if (loading) {
    return <h1>Loading</h1>;
  }

  // Display user data or component based on the fetched data
  return (
    <>
    <Nav setCurrentAccount={props.setCurrentAccount}></Nav>
    <Container
    style={{
      paddingTop: '50px',
        textAlign: 'center',
        backgroundColor: '#68d391', // Green background color
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align content to the top
      }}
    >
    <div className="bio"
        style={{
          width: '300px',
          margin: '20px auto 0', // Adjusted margin to push content to the top
          padding: '20px',
          borderRadius: '10px',
        }}>
      <Header as="h1"> {userData.firstName}'s Bio</Header>
      <Divider style={{
            marginBottom: '20px',
            border: 'none',
            height: '2px',
            background: '#000',
            fontWeight: 'bold', // Set font weight to bold
          }} />
      {userData && (
        <List relaxed='very' divided style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
            <List.Item>
              <List.Header>Username</List.Header>
              {userData.username}
            </List.Item>
            <List.Item>
              <List.Header>Email</List.Header>
              {userData.email}
            </List.Item>
            <List.Item>
              <List.Header>Bio</List.Header>
              My name is {userData.firstName} {userData.lastName} and I am {userData.age} years old.
            </List.Item>
            {/* Display other user data as needed */}
          </List>
      )}
    </div>
    </Container>
    </>
  );
}

export default Account;