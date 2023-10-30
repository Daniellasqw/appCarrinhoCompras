import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src//screens/routes';
import  ContextProvider  from './src/context/context';

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
      <StatusBar backgroundColor="#FAFAFA" barStyle={'dark-content'} />
      <Routes />
      </ContextProvider>
    </NavigationContainer>
  );
}


