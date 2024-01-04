import React, {useState, useEffect} from 'react';
import {Form, Input, Button, Label} from 'semantic-ui-react';
import axios from 'axios';
import WarningLabel from './WarningLabel';
import { useHistory } from 'react-router-dom';





export default function SignupForm(props) {
  const[password, setPassword] = useState(null)
  const[age, setAge] = useState(null)
  const[email, setEmail] = useState(null)
  const[firstName, setFirstName] = useState(null)
  const[lastName, setLastName] = useState(null)


  //whether or not we should show the warning message or not
  const[isWarningVisible, setWarningVisibility] = useState(false)
  const[updatedVisibility, setUpdatedVisibility] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  //handle the submission of the form
  const submitForm = async() => {
    try {
        const requestBody = {
            password,
            age,
            email,
            firstName,
            lastName,
          };
    
          // Filter out null or undefined fields from the request body
          const filteredRequestBody = Object.fromEntries(
            Object.entries(requestBody).filter(([_, value]) => value != null)
          );

      const resp = await axios.patch("/update_account/" + props.loggedInUser, filteredRequestBody)
      setWarningVisibility(false);
      setUpdatedVisibility(true)
    } catch (e) {
      if (e.response && e.response.data) {
        // Set the error message received from the API
        setErrorMessage(e.response.data);
      } else {
        setErrorMessage('An error occurred while processing your request.');
      }
        setUpdatedVisibility(false)
        setWarningVisibility(true);
        console.error(e.message);
    }
}

  
  


  return (
   <Form>
    <Form.Field>
    <Input placeholder="Change Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="Change Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="Change First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="Change Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
        <Input
          type="number"
          placeholder="Change Age"
          value={age}
          min="1"
          max="100"
          onChange={(e) => setAge(e.target.value)}
        />
      </Form.Field>
    <Form.Field>
    <Button onClick={() => {
      submitForm()
    }}>Submit</Button>
    </Form.Field>
    {updatedVisibility && <Label basic color='green' pointing='up'>Updated Successfully</Label>}
    <WarningLabel isVisible={isWarningVisible} text={errorMessage || 'Invalid field(s)'}/>
   </Form>
  );
}
