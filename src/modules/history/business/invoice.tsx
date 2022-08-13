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

  const onInvokeNewInvoice = () => {
    dispatch(setModal({
      state: true,
      title: 'Registrar Nota Fiscal',
      fields: [
        {
          id: 'companyId',
          label: 'Empresa'
        },
        {
          id: 'invoiceNumber',
          label: 'Número da Nota'
        },
        {
          id: 'description',
          label: 'Descrição'
        },
        {
          id: 'value',
          label: 'Valor da Nota'
        },
        {
          id: 'createdAt',
          label: 'Data de Emissão'
        },
        {
          id: 'payDay',
          label: 'Data de Pagamento'
        },
      ],
      onChange: onFormUpdate,
      onAction: onSubmit,
    }))
  }
  
  return {
    onInvokeNewInvoice,
  }
}