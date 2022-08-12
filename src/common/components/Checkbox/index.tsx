import { useState } from 'react'
import { MdCheckBoxOutlineBlank } from '@react-icons/all-files/md/MdCheckBoxOutlineBlank'
import { MdCheckBox } from '@react-icons/all-files/md/MdCheckBox'

interface ICheckbox {
  id: string
  label: string
  onChange: ({ id, value } : { id: string, value: boolean }) => any
}

import {
  Container
} from './styles'

export default function Checkbox({
  id,
  label,
  onChange
} : ICheckbox) {
  const [checked, setChecked] = useState<boolean>(false)

  const onUpdate = (value : boolean) => {
    setChecked(value)
    onChange({ id, value})
  }

  return (
    <Container isChecked={checked}>
      <label>
        <input 
          type="checkbox"
          onChange={(evt) => onUpdate(evt.target.checked)}
        />
        <MdCheckBoxOutlineBlank />
        <MdCheckBox />
      </label>
      <span>{label}</span>
    </Container>
  )
}