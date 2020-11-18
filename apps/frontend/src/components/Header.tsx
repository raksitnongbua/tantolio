import React from 'react';
import { Box, Button, IconButton, Theme } from '@material-ui/core';
import Particles, { IParticlesParams } from 'react-particles-js';
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
  particles: {
    position: 'fixed',
    width: '100%',
    height: '100%',
  },
}));
const Header = () => {
  const { button, particles } = useStyles();
  const particlesParams: IParticlesParams = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: true,
        opacity: 0.02,
      },
      move: {
        direction: 'right',
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };
  return (
    <div>
      <Particles className={particles} params={particlesParams} />
      <Box
        position="fixed"
        width="100%"
        display="flex"
        justifyContent="flex-end"
        mx={1}
      >
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
      <Box minHeight="400px"></Box>
    </div>
  );
};

export default Header;
