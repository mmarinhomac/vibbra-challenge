import { AiFillEdit } from '@react-icons/all-files/ai/AiFillEdit'
import { AiTwotoneDelete } from '@react-icons/all-files/ai/AiTwotoneDelete'

export type TypeRecord = {
  id: string
  title: string
  subTitle: string
}

interface IList {
  data: TypeRecord[] | null
  onEdit?: ({ id }: { id: string }) => any
  onDelete?: ({ id }: { id: string }) => any
}

import { Container, Item } from './styles'

export default function List({ data, onEdit, onDelete }: IList) {
  return (
    <Container>
      {data &&
        data.map((item) => (
          <Item key={item.id}>
            <div>
              <strong>{item.title}</strong>
              <span>{item.subTitle}</span>
            </div>

            {onEdit && (
              <div>
                <button onClick={() => onEdit({ id: item.id })}>
                  Editar
                  <AiFillEdit />
                </button>
                {onDelete && (
                  <button onClick={() => onDelete({ id: item.id })}>
                    Excluir
                    <AiTwotoneDelete />
                  </button>
                )}
              </div>
            )}
          </Item>
        ))}
    </Container>
  )
}
