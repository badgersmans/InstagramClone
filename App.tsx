import Navigation from './src/navigation';
import { Amplify,  } from 'aws-amplify';
import awsExports from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import Client from './src/apollo/client';

Amplify.configure(awsExports);

const App = () => {
  return (
    <AuthContextProvider>
      <Client>
        <Navigation />
      </Client>
    </AuthContextProvider>
  )
}

export default App;