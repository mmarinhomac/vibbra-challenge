import { useDispatch } from "react-redux"

import { setModal } from "../../../store/systemSlice"

export default function ExpenseBusiness() {
  const dispatch = useDispatch()

  const onFormUpdate = ({ id, value } : { id: string, value: string }) => {
    console.log({ id, value })
  }

  const onSubmit = () => {
    console.log('submit')
  }

  const onInvokeNewExpense = () => {
    dispatch(setModal({
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
        }
      ],
      onChange: onFormUpdate,
      onAction: onSubmit,
    }))
  }

  return {
    onInvokeNewExpense,
  }
}