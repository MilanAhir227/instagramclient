
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from './Loader';

const Protect = (props) => {
  
  


  const history = useHistory();
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getToken = localStorage.getItem('token');
    if (!getToken) {
      return history.push('/');
    }
    setToken(getToken);

    const delay = 1000;
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [history]);

  if (isLoading) {
    return <Loader />;
  }

  // return props.children;
  return (
    <>
    
    </>
  )
};

export default Protect;
{/* <>
      <Navbar/>
      {props.children}
    </> */}