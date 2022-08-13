import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { usePreferencesContext } from "../context"
import { setModal } from "../../../store/systemSlice"

import { getCategoriesRequest } from "../../../services/categorie"

export default function CategoryBusiness() {
  const context = usePreferencesContext()
  const dispatch = useDispatch()

  const [initialRender, setInitialRender] = useState(true)

  const onFormUpdate = ({ id, value } : { id: string, value: string }) => {
    console.log({ id, value })
  }

  const onSubmit = () => {
    console.log('submit')
  }

  const onInvokeNewCategory = () => {
    dispatch(setModal({
      state: true,
      title: 'Registrar Categoria',
      fields: [
        {
          id: 'categoryName',
          label: 'Nome',
          onChange: onFormUpdate
        },
        {
          id: 'categoryDescription',
          label: 'Descrição',
          onChange: onFormUpdate
        },
        {
          id: 'categoryFiled',
          label: 'Arquivada',
          onChange: onFormUpdate
        }
      ],
      onAction: onSubmit
    }))
  }

  const onInvokeEditCategory = () => {
    console.log('onInvokeEditCategory')
  }

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getCategoriesRequest()
        .then((data: any) => {
          context.setCategoryList(data.categories)
        })
    }
  }, [initialRender, context])
  
  useEffect(() => setInitialRender(false), [])

  return {
    categoryList: context.categoryList.map(item => ({ id: item.id, title: item.name, subTitle: item.description })),
    onInvokeNewCategory,
    onInvokeEditCategory,
  }
}