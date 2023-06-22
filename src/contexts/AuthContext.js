import { Auth, Hub } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    user: undefined,
    setUser: () => {}
});

const AuthContextProvider = ({children}) => {

    useEffect(() => {
        const checkUser = async () => {
            try {
                const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
                setUser(authUser);
            } catch (error) {
                setUser(null);
            }
        };
        checkUser();
    }, []);

    useEffect(() => {
        const listener = (data) => {
            const { event } = data.payload;
            if(event === 'signOut') setUser(null);
            // console.log(data)
        }
        const result = Hub.listen('auth', listener);
        return () => result
    }, [])
    const [user, setUser] = useState(undefined);
    // console.log(`user is?`, user)

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;
export const useMyAuthContext = () => useContext(AuthContext);