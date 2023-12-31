import {Button} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';



export default function SignOutButton(props) {
  const history = useHistory();

  const handleCreateAccountClick = () => {
    props.setLoggedInUser(null);
    history.push('/login');
  };

  
  return (
   <Button onClick={handleCreateAccountClick}>Sign Out as {props.loggedInUser}</Button>
  );
}