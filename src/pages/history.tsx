import Head from 'next/head'

import HistoryView from '../modules/history/view'

const History = () => {
  return (
    <div>
      <Head>
        <title>History</title>
      </Head>

      <HistoryView />
    </div>
  )
}

export default History
