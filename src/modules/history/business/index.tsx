import { useHistoryContext } from "../context"

export default function HistoryBusiness() {
  const context = useHistoryContext()

  const onChangeTab = () => context.setTabSelected(oldState => oldState === 0 ? 1 : 0)

  const onInvokeRecord = (tab: number, handleOne: () => any, handleTwo: () => any) => {
    if (tab === 0) return handleOne()
    handleTwo()
  }

  return {
    tabSelected: context.tabSelected,
    tabTitle: context.tabSelected === 0 ? 'Nova Nota Fiscal' : 'Nova Despesa',
    onChangeTab,
    onInvokeRecord,
  }
}