import Head from 'next/head'

import { HistoryProvider } from '../modules/history/context'

import HistoryView from '../modules/history/view'

const History = () => {
  return (
    <>
      <Head>
        <title>History</title>
      </Head>

      <HistoryProvider>
        <HistoryView />
      </HistoryProvider>
    </>
  )
}

export default History
