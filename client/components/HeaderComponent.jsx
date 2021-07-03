import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbar: {
    backgroundColor: "#7a45ff",
  }
};

function HeaderComponent(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className='navbar' position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            eStore for things that are tight
          </Typography>
          <Button color="inherit">Cart</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderComponent);