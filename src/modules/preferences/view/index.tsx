import { withAuth } from "../../../common/hooks/withAuth"

function PreferencesView() {
  return (
    <h1>PreferencesView</h1>
  )
}

export default withAuth(PreferencesView)