import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" color="inherit" underline="none">
                MSAL React Tutorial
              </Link>
            </Typography>
            { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
          </Toolbar>
        </AppBar>
      </Box>
      <h5><center>Welcome to the Microsoft Authentication Library For React Tutorial</center></h5>
      <br />
      <br />
      {props.children}
    </>
  );
};
