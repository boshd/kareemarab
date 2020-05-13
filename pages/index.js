import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kareem Arab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          <li>kareem's apprehension</li>
          <li>about</li>
          <li>writing</li>
          <li>projects</li>
          <li>bookshelf</li>
          <li>research</li>
          <li>film</li>
          <li>mildly interesting</li>
          <li>music</li>
          <li>resume</li>
        </ul>
      </main>
    </div>
  )
}
