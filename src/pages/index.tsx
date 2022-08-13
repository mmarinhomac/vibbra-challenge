import Head from 'next/head'

import { HomeProvider } from '../modules/home/context'

import HomeView from '../modules/home/view'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <HomeProvider>
        <HomeView />
      </HomeProvider>
    </>
  )
}

export default Home
