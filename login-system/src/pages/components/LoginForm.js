import React, {useState, useEffect} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';
import axios from 'axios';
import WarningLabel from './WarningLabel';
import { useHistory } from 'react-router-dom';





export default function LoginForm(props) {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  //whether or not the submission of the form was valid or not
  const[isFormValid, setFormValidity] = useState(false)
  //whether or not we should show the warning message or not
  const[isWarningVisible, setWarningVisibility] = useState(false)

  const history = useHistory();

  const { setLoggedInUser } = props; //destructuring props
  const [errorMessage, setErrorMessage] = useState('');
  

  //handle the submission of the form
  const submitForm = async() => {
    if(username === ''){
      setErrorMessage('Please enter a username');
      setWarningVisibility(true);
      return;
    }
    if(password === ''){
      setErrorMessage('Please enter a password');
      setWarningVisibility(true);
      return;
    }
    try {;
        //will make a 400 or 404 error if this is not a valid username
        const resp = await axios.get("/get_account/" + username);
        //make sure the password submitted is the same as the password returned from api
        if (resp.data.password !== password){
          setErrorMessage("Password does not match username")
          setWarningVisibility(true);
          setFormValidity(false);

        } else{
          setWarningVisibility(false);
          setFormValidity(true);
        }
        console.log(username); // Log or handle the response data here if needed
    } catch (e) {
        setWarningVisibility(true);
        if (e.response && e.response.data) {
          // Set the error message received from the API
          setErrorMessage(e.response.data);
        } else {
          setErrorMessage('An error occurred while processing your request.');
        }
        setFormValidity(false);
    }
}

useEffect(() =>{
if(isFormValid){
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
    <Button onClick={() => {
      submitForm()
    }}>Submit</Button> <br></br>
    <WarningLabel isVisible={isWarningVisible} text = {errorMessage || "Invalid username or password"}/>
    </Form.Field>
   </Form>
  );
}
