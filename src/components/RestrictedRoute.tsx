import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { selectIsLoggedIn } from '../redux/auth/selectors';

interface Props{
  component: React.ReactElement;
  redirectTo: string;
}

export const RestrictedRoute = ({ component, redirectTo = '/' }: Props) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};