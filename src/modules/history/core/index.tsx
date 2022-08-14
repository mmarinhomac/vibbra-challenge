import { TypeRecord } from '../../../common/components/List'

import { useHistoryContext } from '../context'

export default function HistoryCore() {
  const context = useHistoryContext()

  const onChangeTab = (tab: number) => context.setTabSelected(tab)

  const onInvokeRecord = (
    tab: number,
    handleOne: () => any,
    handleTwo: () => any
  ) => {
    if (tab === 0) return handleOne()
    handleTwo()
  }

  const onSelectDataList = (
    tab: number,
    dataOne: TypeRecord[] | null,
    dataTwo: TypeRecord[] | null
  ) => {
    if (tab === 0) return dataOne
    return dataTwo
  }

  return {
    tabSelected: context.tabSelected,
    tabTitle: context.tabSelected === 0 ? 'Nova Nota Fiscal' : 'Nova Despesa',
    onChangeTab,
    onInvokeRecord,
    onSelectDataList,
  }
}
