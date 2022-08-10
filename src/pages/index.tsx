import Head from 'next/head'

import HomeView from '../modules/home/view'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <HomeView />
    </div>
  )
}

export default Home
