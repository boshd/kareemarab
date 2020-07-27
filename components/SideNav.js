import React, { Component } from 'react'
import Link from 'next/link';
import config from '../data/config';

export default class SideNav extends Component {

    render() {
        return (
            <nav className='sidenav-container'>
                <div className="links-container">
                    <ul>
                        {config.menuLinks.map(link => (
                            <li>
                                <Link href={link.link} passHref={true}>
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