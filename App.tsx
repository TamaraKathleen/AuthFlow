import React from 'react';
import { AuthProvider } from './src/contexts/Auth';
import { Router } from './src/routes/app.routes';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
