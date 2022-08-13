import { withAuth } from "../../../common/hooks/withAuth"

import List from "../../../common/components/List"
import Button from "../../../common/components/Button"

import { Container } from "./styles"
import { RecordsContentHeader as ContainerHeader, Tab } from "../../preferences/view/styles"

function HistoryView() {
  return (
    <Container>
      <ContainerHeader>
        <div>
          <Tab isSelect={true} onClick={() => {}}>Notas Fiscais</Tab>
          <Tab isSelect={false} onClick={() => {}}>Despesas</Tab>
        </div>

        <Button onClick={() => {}}>Nova Nota Fiscal</Button>
      </ContainerHeader>

      <List
        onEdit={() => {}}
        onDelete={() => {}}
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
    </Container>
  )
}

export default withAuth(HistoryView)
