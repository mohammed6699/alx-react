import React from 'react';

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: '',
};
function logOut(){
    console.log("hello");
};
export const UserContest = React.createContext({
    user: Mohammed,
    logOut: logedOut,
});