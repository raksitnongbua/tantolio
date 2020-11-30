import React from 'react';
import { Box, IconButton, Theme } from '@material-ui/core';
import Particles, { IParticlesParams } from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

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
  link: {
    alignSelf: 'center',
    fontSize: '1.25rem',
    cursor: 'pointer',
    padding: theme.spacing(1),
    transition: 'color .4s ease-out',
    '&.active': {
      color: theme.palette.primary.main,
    },
  },
}));
interface IProps {
  elementVisible: string;
}
const menus = ['is', 'work', 'about', 'contact'];
const Header: React.FC<IProps> = ({ elementVisible }) => {
  const { button, particles, link } = useStyles();
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
        p={1}
      >
        {menus.map((key) => (
          <Link
            key={`link-${key}`}
            to={key}
            className={link}
            spy={true}
            smooth={true}
            duration={500}
          >
            {`.${key}()`}
          </Link>
        ))}
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
    </div>
  );
};

export default Header;
