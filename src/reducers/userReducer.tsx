import type { User } from '../types/user';

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: 'ADD_USER'; payload: User }
  | { type: 'REMOVE_USER'; payload: number }
  | { type: 'SET-loading'; payload: boolean }
  | { type: 'SET-error'; payload: string | null };

export const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'REMOVE_USER':
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    case 'SET-loading':
      return { ...state, loading: action.payload };
    case 'SET-error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};