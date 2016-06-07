import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';


const Header = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <AppBar
          title="Perlur Business Stack"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
