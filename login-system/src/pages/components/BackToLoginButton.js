import {Button} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';



export default function NewAccountButton() {
  const history = useHistory();

  const handleCreateAccountClick = () => {
    history.push('/login');
  };

  
  return (
   <Button onClick={handleCreateAccountClick}>Back to Sign In</Button>
  );
}
