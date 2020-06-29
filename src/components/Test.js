import React, { useContext } from 'react';

import MapContext from '../MapContext';

export default function Test() {
  const { user, setUser } = useContext(MapContext);

  return (
    <div>
      <p>hey {user.name}</p>
      <button
        onClick={() => {
          const newUser = { name: 'Joe' };

          setUser(newUser);
        }}
      >
        Change user
      </button>
    </div>
  );
}
