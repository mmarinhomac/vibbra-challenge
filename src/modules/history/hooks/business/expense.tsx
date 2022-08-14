import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useHistoryContext } from '../../context'

import { setModal } from '../../../../store/systemSlice'

import { getExpensesRequest } from '../../../../services/expense'

export default function ExpenseBusiness() {
  const context = useHistoryContext()
  const dispatch = useDispatch()

  const [initialRender, setInitialRender] = useState(true)

  const onFormUpdate = ({ id, value }: { id: string; value: string }) => {
    console.log({ id, value })
  }

  const onSubmit = () => {
    console.log('submit')
  }

  const onInvokeNewExpense = () => {
    dispatch(
      setModal({
        state: true,
        title: 'Registrar Despesa',
        fields: [
          {
            id: 'categoryId',
            label: 'Categoria',
          },
          {
            id: 'companyId',
            label: 'Empresa',
          },
          {
            id: 'name',
            label: 'Nome',
          },
          {
            id: 'value',
            label: 'Valor',
          },
          {
            id: 'createdAt',
            label: 'Data da Despesa',
          },
          {
            id: 'dateRefCompetency',
            label: 'Data do Pagamento',
          },
        ],
        onChange: onFormUpdate,
        onAction: onSubmit,
      })
    )
  }

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getExpensesRequest().then((data: any) => {
        context.setExpenseList(data.expenses)
      })
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    expenseList: context.expenseList.map((item) => ({
      id: item.id,
      title: item.name,
      subTitle: String(item.value),
    })),
    onInvokeNewExpense,
  }
}
