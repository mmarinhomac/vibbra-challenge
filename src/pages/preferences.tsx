import Head from 'next/head'

import { PreferencesProvider } from '../modules/preferences/context'

import PreferencesView from '../modules/preferences/view'

const Preferences = () => {
  return (
    <>
      <Head>
        <title>Preferences</title>
      </Head>

      <PreferencesProvider>
        <PreferencesView />
      </PreferencesProvider>
    </>
  )
}

export default Preferences
