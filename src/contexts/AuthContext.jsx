/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: true,
      };

    case 'logout':
      return { ...state, ...initialState };

    default:
      throw new Error('Unknown Action Detected');
  }
};

const FAKE_USER = {
  name: 'Muhammad Jiya',
  email: 'jiya@gmail.com',
  password: 'halalvest123',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

const AuthContextProvider = ({ children }) => {
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    }
  };
  const logout = () => {
    dispatch({ type: 'logout' });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, isLoading, FAKE_USER }}
    >
      {children};
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('This context was used outside the AuthProvider');

  return context;
};

export { useAuthContext, AuthContextProvider };
