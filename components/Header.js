import React, { Component } from 'react'
import Link from 'next/link';
import config from '../data/config';

export default class Header extends Component {

    render() {
        return (
            <nav className='nav-container'>
                <div className="links-container">
                    <ul>
                        {config.menuLinks.map(link => (
                            <li>
                                <Link href={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }

}