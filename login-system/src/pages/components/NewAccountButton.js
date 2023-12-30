import {Button} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';



export default function NewAccountButton() {
  const history = useHistory();

  const handleCreateAccountClick = () => {
    history.push('/signup');
  };

  
  return (
   <Button onClick={handleCreateAccountClick}>Create New Account</Button>
  );
}
