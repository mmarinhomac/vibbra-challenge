import { TypeRecord } from "../../../common/components/List"

import { usePreferencesContext } from "../context"

export default function ModuleBusiness() {
  const context = usePreferencesContext()

  const onChangeTab = () => context.setTabSelected(oldState => oldState === 0 ? 1 : 0)

  const onInvokeRecord = (tab: number, handleOne: () => any, handleTwo: () => any) => {
    if (tab === 0) return handleOne()
    handleTwo()
  }

  const onSelectDataList = (tab: number, dataOne: TypeRecord[], dataTwo: TypeRecord[]) => {
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