import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import { Button } from '@mui/material';

function handleLogin(instance) {
  instance.loginPopup(loginRequest).catch(e => {
    console.error(e);
  });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  return (
    <Button
      color="inherit"
      onClick={() => handleLogin(instance)}>
        Sign in using Popup
    </Button>
  );
}
