import { useEffect, useState } from 'react'

interface IInput {
  id: string
  type?: string
  placeholder?: string
  onChange: ({ id, value } : { id: string, value: string }) => any
  initialValue?: string
}

import {
  Container
} from './styles'

export default function Input({
  id,
  type = 'text',
  placeholder,
  onChange,
  initialValue
} : IInput) {
  const [checkInitialValue, setCheckInitialValue] = useState('')
  const [value, setValue] = useState('')

  const onUpdate = ({ value } : { value: string }) => {
    setValue(value)
    onChange({
      id,
      value
    })
  }

  useEffect(() => {
    if (
      initialValue &&
      initialValue !== checkInitialValue
    ) {
      setCheckInitialValue(initialValue)
      setValue(initialValue)
    }
  }, [initialValue, checkInitialValue])

  return (
    <Container>
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={(evt) => onUpdate({ value: evt.target.value })}
      />
    </Container>
  )
}
