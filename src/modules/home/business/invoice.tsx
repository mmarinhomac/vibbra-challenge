import { useDispatch } from "react-redux"
import { setModal } from "../../../store/systemSlice"

export default function InvoiceBusiness() {
  const dispatch = useDispatch()

  const onFormUpdate = ({ id, value } : { id: string, value: string }) => {
    console.log({ id, value })
  }

  const onSubmit = () => {
    console.log('submit')
  }

  const onInvokeNewInvoice = () => dispatch(setModal({
    state: true,
    title: 'Registrar Nota Fiscal',
    fields: [
      {
        id: 'company',
        label: 'Empresa',
        onChange: onFormUpdate,
      },
      {
        id: 'value',
        label: 'Valor da Nota Fiscal',
        onChange: onFormUpdate,
      },
      {
        id: 'number',
        label: 'Número da Nota Fiscal',
        onChange: onFormUpdate,
      },
      {
        id: 'description',
        label: 'Descrição do serviço prestado',
        onChange: onFormUpdate,
      },
      {
        id: 'createAt',
        label: 'Mês de competência',
        onChange: onFormUpdate,
      },
      {
        id: 'payDay',
        label: 'Data de recebimento',
        onChange: onFormUpdate,
      }
    ],
    onAction: onSubmit
  }))

  return {
    onInvokeNewInvoice
  }
}