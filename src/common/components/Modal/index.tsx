import { useSelector } from 'react-redux'

import { selectModalState } from '../../../store/systemSlice'

import ModalContent from './ModalContent'

export default function Modal() {
  const modalActived = useSelector(selectModalState)

  if (modalActived) return <ModalContent />
  return null
}
