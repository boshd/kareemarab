import React, { Component } from 'react'
import Link from 'next/link';
import config from '../data/config';

export default class Header extends Component {

    state = {
        scrolled: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.navOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll)
    }

    navOnScroll = () => {
        if (window.scrollY > 20) {
            this.setState({ scrolled: true })
        } else {
            this.setState({ scrolled: false})
        }
    }

    render() {
        const { scrolled } = this.state

        return (
            <nav className={scrolled ? 'nav scroll' : 'nav'}>
                <nav className='nav-container'>
                    <div className='logo'>
                        <Link href='/'>
                            <span className="text">Kareem's apprehension</span>
                        </Link>
                    </div>
                    <div className="links">
                        {config.menuLinks.map(link => (
                            <Link href={link.link}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </nav>
        )
    }

}