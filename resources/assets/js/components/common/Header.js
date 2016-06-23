import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Row, Col} from 'react-bootstrap';

const Header = () => {
  return (
    <Row>
      <Col md={12}>
        <AppBar
          title="Perlur Business Stack"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </Col>
    </Row>
  );
};

Header.propTypes = {
};

export default Header;
