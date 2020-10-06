import React from 'react';
import Head from 'next/head';
import config from '../data/config'
import SideNav from '@components/SideNav';

const Layout = ({ children }) => (
  <div>
      <Head>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription}/>
          {/* <meta name="image" content={logo} /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>

          {/* <link rel="icon" href={logo}></link> */}
      </Head>

      <div className='outer-container'>
        <SideNav/>
        <div className='main'>
          {children}
        </div>
      </div>

  </div>
)

export default Layout