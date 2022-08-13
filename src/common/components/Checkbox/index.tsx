import { useEffect, useState } from 'react'

import { MdCheckBoxOutlineBlank } from '@react-icons/all-files/md/MdCheckBoxOutlineBlank'
import { MdCheckBox } from '@react-icons/all-files/md/MdCheckBox'

interface ICheckbox {
  id: string
  label?: string
  onChange: ({ id, value } : { id: string, value: boolean }) => any
  initialValue: boolean
}

import {
  Container
} from './styles'

export default function Checkbox({
  id,
  label,
  onChange,
  initialValue
} : ICheckbox) {
  const [checkInitialValue, setCheckInitialValue] = useState(false)
  const [checked, setChecked] = useState(false)

  const onUpdate = (value : boolean) => {
    setChecked(value)
    onChange({ id, value})
  }

  useEffect(() => {
    if (
      initialValue !== checkInitialValue
    ) {
      setCheckInitialValue(initialValue)
      setChecked(initialValue)
    }
  }, [initialValue])

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
      {label && (
        <span>{label}</span>
      )}
    </Container>
  )
}