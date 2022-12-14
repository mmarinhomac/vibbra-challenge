import { useState } from 'react'

import { GoChevronDown } from '@react-icons/all-files/go/GoChevronDown'

interface ISelect {
  id: string
  label: string
  options: string[] | null
  onChange: ({ id, value }: { id: string; value: string }) => any
}

import { Container, Fade, ContainerOptions } from './styles'

export default function Select({ id, label, options, onChange }: ISelect) {
  const [actived, setActived] = useState(false)

  const onUpdate = (option: string) => {
    setActived(false)
    onChange({ id, value: option })
  }

  if (!options) return <></>

  return (
    <Container>
      <button onClick={() => setActived((bool) => !bool)}>
        {label}
        <GoChevronDown />
      </button>

      {actived && (
        <>
          <Fade onClick={() => setActived(false)} />
          <ContainerOptions>
            {options.map((option) => (
              <button key={option} onClick={() => onUpdate(option)}>
                {option}
              </button>
            ))}
          </ContainerOptions>
        </>
      )}
    </Container>
  )
}
