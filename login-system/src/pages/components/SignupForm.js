import React, {useState, useEffect} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import axios from 'axios';
import WarningLabel from './WarningLabel';





export default function SignupForm() {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const[age, setAge] = useState('')
  const[email, setEmail] = useState('')
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')

  //whether or not the submission of the form was valid or not
  const[isFormValid, setFormValidity] = useState(false)
  //whether or not we should show the warning message or not
  const[isWarningVisible, setWarningVisibility] = useState(false)

  //handle the submission of the form
  const submitForm = async() => {
    try {;
    } catch (e) {
        setFormValidity(false);
        console.error(e.message);
    }
}

useEffect(() =>{
  if(isFormValid){
    setWarningVisibility(false);
  } else{
    setWarningVisibility(true);
  }
  }, [isFormValid])
  
  


  return (
   <Form>
    <Form.Field>
    <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="Password (between 8-20 character, with at least one number, one upper and lower case letter, and one special character" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
        <Input
          type="number"
          placeholder="Age"
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
    <WarningLabel isVisible={isWarningVisible} text="Invalid username or password"/>
   </Form>
  );
}
