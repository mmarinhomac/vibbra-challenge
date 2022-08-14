import { useDispatch, useSelector } from 'react-redux'
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose'

import { selectModalData, setModal } from '../../../../store/systemSlice'
import Button from '../../Button'
import Input from '../../Input'

import { Container, Fade, Content, ContentHeader } from './styles'

export default function ModalContent() {
  const modalData = useSelector(selectModalData)
  const dispatch = useDispatch()

  const onClose = () => dispatch(setModal({ state: false }))

  return (
    <Container>
      <Fade onClick={onClose} />

      <Content>
        <ContentHeader>
          <h3>{modalData.modalTitle}</h3>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </ContentHeader>

        {modalData.modalFields?.map((field) => (
          <div key={field.id}>
            <strong>{field.label}</strong>
            <Input id={field.id} onChange={modalData.modalFieldOnChange} />
          </div>
        ))}

        <Button onClick={modalData.modalAction}>Salvar</Button>
      </Content>
    </Container>
  )
}
