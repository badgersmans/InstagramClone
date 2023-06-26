import Navigation from './src/navigation';
import { Amplify,  } from 'aws-amplify';
import awsExports from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import Client from './src/apollo/client';
import { MenuProvider } from 'react-native-popup-menu';

Amplify.configure(awsExports);

const App = () => {
  return (
    <AuthContextProvider>
      <Client>
        <MenuProvider>
          <Navigation />
        </MenuProvider>
      </Client>
    </AuthContextProvider>
  )
};

export default App;