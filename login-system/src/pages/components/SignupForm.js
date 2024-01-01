import React, {useState, useEffect} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import axios from 'axios';
import WarningLabel from './WarningLabel';
import { useHistory } from 'react-router-dom';





export default function SignupForm(props) {
  const[username, setUsername] = useState(null)
  const[password, setPassword] = useState(null)
  const[age, setAge] = useState(null)
  const[email, setEmail] = useState(null)
  const[firstName, setFirstName] = useState(null)
  const[lastName, setLastName] = useState(null)

  const history = useHistory();

  const { setLoggedInUser } = props;  //destructuring props

  //whether or not the submission of the form was valid or not
  const[isFormValid, setFormValidity] = useState(false)
  //whether or not we should show the warning message or not
  const[isWarningVisible, setWarningVisibility] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  //handle the submission of the form
  const submitForm = async() => {
    if(!(username & password && email && age && firstName && lastName)) {
      setErrorMessage('Please make sure all fields are filled out');
      setWarningVisibility(true);
      return;
    }
    try {
      const resp = await axios.post("/add_account", {
        username: username,
        password: password,
        age: age,
        email: email,
        firstName: firstName,
        lastName: lastName
      })
      console.log("added successfully");
      setFormValidity(true);
    } catch (e) {
      if (e.response && e.response.data) {
        // Set the error message received from the API
        setErrorMessage(e.response.data);
      } else {
        setErrorMessage('An error occurred while processing your request.');
      }
        setWarningVisibility(true);
        console.error(e.message);
    }
}

useEffect(() =>{
  if(isFormValid){ 
    setWarningVisibility(false);
    setLoggedInUser(username);
    history.push('/account')
  } 
  }, [isFormValid])
  
  


  return (
   <Form>
    <Form.Field>
    <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
    <WarningLabel isVisible={isWarningVisible} text={errorMessage || 'Invalid field(s)'}/>
   </Form>
  );
}
