import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = ({ t }) => (
    <div className="header">
        <p>im a header</p>
        <ul>
            <li>
                <Link href='/about'>
                    about
                </Link>
            </li>
            <li><a href="#">writing</a></li>
            <li><a href="#">projects</a></li>
            <li><a href="#">bookshelf</a></li>
            <li><a href="#">research</a></li>
            <li><a href="#">film</a></li>
            <li><a href="#">mildly interesting</a></li>
            <li><a href="#">music</a></li>
            <li><a href="#">resume</a></li>
        </ul>
    </div>
);

Header.propTypes = {
    t: PropTypes.func,
    config: PropTypes.object,
};

export default Header;