import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ t }) => (
    <div className="header">
        <p>im a header</p>
    </div>
);

Header.propTypes = {
    t: PropTypes.func,
    config: PropTypes.object,
};

export default Header;