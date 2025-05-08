import './App.css';
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refresh } from './redux/auth/operations';
import { Suspense } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { Toaster } from 'react-hot-toast';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


export default function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" 
              component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" 
              component={<LoginPage />} />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}