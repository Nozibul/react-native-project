import React from 'react';
import {View, Text} from 'react-native';
import NavigationFlow from './NavigationFlow';
import {Provider as AuthProvider} from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationFlow />
    </AuthProvider>
  );
};
export default App;
