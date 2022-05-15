import { useMsal } from '@azure/msal-react';
import { Button } from '@mui/material';

function handleLogout(instance) {
  instance.logoutPopup().catch(e => {
    console.error(e);
  });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <Button
      color="inherit"
      onClick={() => handleLogout(instance)}
    >
      Sign out using Popup
    </Button>
  );
}
