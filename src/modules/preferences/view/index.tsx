import { withAuth } from "../../../common/hooks/withAuth"

import Button from "../../../common/components/Button"
import Checkbox from "../../../common/components/Checkbox"
import Input from "../../../common/components/Input"
import List from "../../../common/components/List"

import { 
  Container,
  Line,
  GeneralContent,
  RecordsContent,
  RecordsContentHeader,
  VStack,
  HStack,
} from "./styles"

function PreferencesView() {
  return (
    <Container>
      <h2>Gerais</h2>
      <Line />
      <GeneralContent>
        <VStack>
          <span>Limite máximo de faturamento para MEI</span>
          <HStack>
            <Input id='limitBilling' onChange={() => {}}/>
            <Button>Salvar</Button>
          </HStack>
        </VStack>
        <VStack>
          <span>Notificações</span>
          <HStack>
            <Checkbox id='emailNotification' label='E-mail' onChange={() => {}}/>
            <Checkbox id='smsNotification' label='SMS' onChange={() => {}}/>
          </HStack>
        </VStack>
      </GeneralContent>

      <h2>Cadastros</h2>
      <Line />
      <RecordsContent>
        <RecordsContentHeader>
          <div>
            <button>Empresas</button>
            <button>Categorias</button>
          </div>

          <Button>Nova Empresa</Button>
        </RecordsContentHeader>

        <List 
          onEdit={() => {}}
          data={[
            {
              id: '1,',
              title: 'Empresa 01',
              subTitle: '75.890.985/0001-77'
            },
            {
              id: '2,',
              title: 'Empresa 01',
              subTitle: '75.890.985/0001-77'
            },
            {
              id: '3,',
              title: 'Empresa 01',
              subTitle: '75.890.985/0001-77'
            },
            {
              id: '4,',
              title: 'Empresa 01',
              subTitle: '75.890.985/0001-77'
            }
          ]}
        />
      </RecordsContent>
    </Container>
  )
}

export default withAuth(PreferencesView)