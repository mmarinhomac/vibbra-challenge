import { TypeRecord } from '../../../common/components/List'

import { usePreferencesContext } from '../context'

export default function PreferencesCore() {
  const context = usePreferencesContext()

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
    onChangeTab,
    onInvokeRecord,
    tabTitle: context.tabSelected === 0 ? 'Nova Empresa' : 'Nova Categoria',
    onSelectDataList,
  }
}
