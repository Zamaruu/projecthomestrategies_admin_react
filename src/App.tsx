import { dividerClasses } from '@mui/material';
import React from 'react';
import AuthenticationProvider from './context/authentication_context';
import AuthenticationHandler from './pages/authentication/authentication_handler';

function App(){
  return (
    <AuthenticationProvider>
      <AuthenticationHandler></AuthenticationHandler>
    </AuthenticationProvider>
  );
}

export default App;
