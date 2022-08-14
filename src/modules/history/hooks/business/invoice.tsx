import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { TypeRecord } from '../../../../common/components/List'

import { useHistoryContext } from '../../context'

import { setModal } from '../../../../store/systemSlice'

import { getInvoicesRequest } from '../../../../services/invoice'

export default function InvoiceBusiness() {
  const context = useHistoryContext()
  const dispatch = useDispatch()

  const [initialRender, setInitialRender] = useState(true)

  const onFormUpdate = ({ id, value }: { id: string; value: string }) => {
    console.log({ id, value })
  }

  const onSubmit = () => {
    console.log('submit')
  }

  const onInvokeNewInvoice = () => {
    dispatch(
      setModal({
        state: true,
        title: 'Registrar Nota Fiscal',
        fields: [
          {
            id: 'companyId',
            label: 'Empresa',
          },
          {
            id: 'invoiceNumber',
            label: 'Número da Nota',
          },
          {
            id: 'description',
            label: 'Descrição',
          },
          {
            id: 'value',
            label: 'Valor da Nota',
          },
          {
            id: 'createdAt',
            label: 'Data de Emissão',
          },
          {
            id: 'payDay',
            label: 'Data de Pagamento',
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
      getInvoicesRequest().then((data: any) => {
        context.setInvoiceList(data.invoices)
      })
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    invoiceList: () => {
      if (context.invoiceList) {
        const data: TypeRecord[] = context.invoiceList.map((item) => ({
          id: item.id,
          title: item.description,
          subTitle: String(item.value),
        }))
        return data
      }

      return null
    },
    onInvokeNewInvoice,
  }
}
