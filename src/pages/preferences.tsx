import Head from 'next/head'

import PreferencesView from '../modules/preferences/view'

const Preferences = () => {
  return (
    <div>
      <Head>
        <title>Preferences</title>
      </Head>

      <PreferencesView />
    </div>
  )
}

export default Preferences
