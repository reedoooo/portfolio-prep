import { Route, Navigate } from 'react-router-dom';
import Auth from '../components/Auth/auth';

function PrivateRoute({ children, ...rest }) {
  let auth = Auth(); // Replace with your auth logic
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )
      }
    />
  );
}

export default PrivateRoute;
