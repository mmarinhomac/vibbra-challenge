interface IInput {
  id: string
  type?: string
  placeholder: string
  onChange: ({ id, value } : { id: string, value: string }) => any
}

import {
  Container
} from './styles'

export default function Input({
  id,
  type = 'text',
  placeholder,
  onChange
} : IInput) {
  const onUpdate = ({ value } : { value: string }) => {
    onChange({
      id,
      value
    })
  }

  return (
    <Container>
      <input 
        type={type} 
        placeholder={placeholder}
        onChange={(evt) => onUpdate({ value: evt.target.value })}
      />
    </Container>
  )
}
