import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { usePreferencesContext } from "../context"
import { setModal } from "../../../store/systemSlice"

import { getCompaniesRequest } from "../../../services/companie"

export default function CompanyBusiness() {
  const context = usePreferencesContext()
  const dispatch = useDispatch()

  const [initialRender, setInitialRender] = useState(true)

  const onFormUpdate = ({ id, value } : { id: string, value: string }) => {
    console.log({ id, value })
  }

  const onSubmit = () => {
    console.log('submit')
  }

  const onInvokeNewCompany = () => {
    dispatch(setModal({
      state: true,
      title: 'Registrar Empresa',
      fields: [
        {
          id: 'companyName',
          label: 'Nome',
          onChange: onFormUpdate
        },
        {
          id: 'companySocialReason',
          label: 'Razão Social',
          onChange: onFormUpdate
        },
        {
          id: 'companyRegister',
          label: 'CNPJ',
          onChange: onFormUpdate
        }
      ],
      onAction: onSubmit
    }))
  }

  const onInvokeEditCompany = () => {
    console.log('onInvokeEditCompany')
  }

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getCompaniesRequest()
        .then((data: any) => {
          context.setCompanyList(data.companies)
        })
    }
  }, [initialRender, context])
  
  useEffect(() => setInitialRender(false), [])

  return {
    companyList: context.companyList.map(item => ({ id: item.id, title: item.name, subTitle: item.companyRegister })),
    onInvokeNewCompany,
    onInvokeEditCompany,
  }
}