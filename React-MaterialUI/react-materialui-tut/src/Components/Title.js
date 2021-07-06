import React, { Fragement } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    // <Fragement style={{border: "1px solid black"}}>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
    // </Fragement>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};