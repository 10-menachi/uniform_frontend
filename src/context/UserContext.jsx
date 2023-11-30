import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext([{}, () => {}]);

let initialState = {};

const UserProvider = (props) => {
  const [state, setState] = useState(initialState);

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserProvider };
