import React, {useState} from 'react';
import User from './User'
import Guest from './Guest'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const clickLogin = () => {
    setIsLoggedIn(true);
  }

  const clickLogout = () => {
    setIsLoggedIn(false);
  }

  let consumer;
  if(isLoggedIn) {
    consumer = <User callBack={clickLogout} />;
  }else {
    consumer = <Guest callBack={clickLogin} />;
  }

  return (
    <div>
      <h1>Test</h1>
      {consumer}
    </div>
  );

}

export default App;
