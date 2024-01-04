import React, { useState } from 'react';
import { Menu, MenuItem, Input } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Nav = (props) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const goHome = () => {
    history.push('/home');
  };

  const handleSearch = () => {
    props.setCurrentAccount(searchValue);
    history.push(`/account/${searchValue}`);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const goToSettings = () => {
    history.push('/settings');
  };

  return (
    <div>
      <Menu>
        <MenuItem name="home" onClick={goHome} />
        <MenuItem>
          <Input
            placeholder="search user.."
            icon="search"
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
          />
        </MenuItem>
        <MenuItem name="settings" onClick={goToSettings} />
      </Menu>
    </div>
  );
};

export default Nav;