import Head from 'next/head'

import PreferencesView from '../modules/preferences/view'

const Preferences = () => {
  return (
    <>
      <Head>
        <title>Preferences</title>
      </Head>

      <PreferencesView />
    </>
  )
}

export default Preferences
