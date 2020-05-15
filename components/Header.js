import React from 'react';
import Link from 'next/link';
import config from '../data/config';

const Header = () => (
    <div className="header">
        <ul>
            {config.menuLinks.map(link => (
                <li>
                    <Link href={link.link}>{link.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Header;