import { withAuth } from "../../../common/hooks/withAuth"

function HistoryView() {
  return (
    <h1>HistoryView</h1>
  )
}

export default withAuth(HistoryView)
