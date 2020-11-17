import React from 'react';
import { Box, Button, IconButton, SvgIcon, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    transition: 'color .4s ease-out',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      color: theme.palette.primary.main,
    },
  },
}));
const Header = () => {
  const { button } = useStyles();
  return (
    <Box position="static" display="flex" justifyContent="flex-end" mx={1}>
      <Button variant="text" className={button} disabled disableRipple>
        .is()
      </Button>
      <Button variant="text" className={button} disableRipple>
        .work()
      </Button>
      <Button variant="text" className={button} disableRipple>
        .about()
      </Button>
      <Button variant="text" className={button} disableRipple>
        .contact()
      </Button>

      <IconButton
        disableRipple
        className={button}
        onClick={() =>
          window.open(
            'https://github.com/raksitnongbua/tantolio/tree/master/apps/frontend'
          )
        }
      >
        <img
          alt="github"
          src={`${process.env.PUBLIC_URL}/images/github-icon.png`}
          style={{ width: '30px', height: '30px' }}
        />
      </IconButton>
    </Box>
  );
};

export default Header;
