import { useDispatch } from 'react-redux'
import { setModal } from '../../../../store/systemSlice'

export default function ExpenseBusiness() {
  const dispatch = useDispatch()

  const onFormUpdate = ({ id, value }: { id: string; value: string }) => {
    console.log({ id, value })
  }

  const onSubmit = () => {
    console.log('submit')
  }

  const onInvokeNewExpense = () =>
    dispatch(
      setModal({
        state: true,
        title: 'Registrar Nota Despesa',
        fields: [
          {
            id: 'company',
            label: 'Empresa',
          },
          {
            id: 'category',
            label: 'Categoria',
          },
          {
            id: 'value',
            label: 'Valor da despesa',
          },
          {
            id: 'name',
            label: 'Nome da despesa',
          },
          {
            id: 'payDay',
            label: 'Data de pagamento',
          },
          {
            id: 'createAt',
            label: 'Data de competência',
          },
        ],
        onChange: onFormUpdate,
        onAction: onSubmit,
      })
    )

  return {
    onInvokeNewExpense,
  }
}
