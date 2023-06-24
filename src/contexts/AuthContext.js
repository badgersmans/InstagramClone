import { Auth, Hub } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    user: undefined
});


const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            //  console.log(authUser)
            // setUser(authUser);
            setUser(authUser);
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        const listener = (data) => {
            const { event } = data.payload;
            if(event === 'signOut') setUser(null);
            if(event === 'signIn') checkUser();
            // console.log(data)
        } 
        const result = Hub.listen('auth', listener);
        return () => result
    }, [])
    // console.log(`user is?`, user)

    return (
        <AuthContext.Provider value={{user, userId: user?.attributes?.sub}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;
export const useMyAuthContext = () => useContext(AuthContext);