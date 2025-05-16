import { createContext, useContext, useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { userReducer } from "../reducers/userReducer";
import type { User } from "../types/user";

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

interface UserContextType {
  state: State;
  dispatch: React.Dispatch<any>;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, { users: [], loading: true, error: null });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => {
        data.forEach((user: User) => dispatch({ type: 'ADD_USER', payload: user }));
        dispatch({ type: 'SET-loading', payload: false });
      })
      .catch(error => {
        dispatch({ type: 'SET-error', payload: error.message });
        dispatch({ type: 'SET-loading', payload: false });
      });
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within a UserProvider");
  return context;
};