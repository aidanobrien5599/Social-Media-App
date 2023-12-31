import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import SignOutButton from './components/SignOutButton';

function Account(props) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/get_account/' + props.loggedInUser)
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
  }, [props.loggedInUser]); // Make sure to add dependencies to the useEffect array
  if (loading) {
    return <h1>Loading</h1>;
  }

  // Display user data or component based on the fetched data
  return (
    <>
    <div class="bio">
      <Header as="h1">Account Details</Header>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>My name is {userData.firstName} {userData.lastName} and I am {userData.age} years old</p>
          {/* Display other user data as needed */}
        </div>
      )}
    </div>
    <SignOutButton setLoggedInUser={props.setLoggedInUser} loggedInUser={props.loggedInUser}/>
    </>
  );
}

export default Account;