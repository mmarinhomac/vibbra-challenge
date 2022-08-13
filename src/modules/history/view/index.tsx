import { withAuth } from "../../../common/hooks/withAuth"

import HistoryBusiness from "../business"
import InvoiceBusiness from "../business/invoice"
import ExpenseBusiness from "../business/expense"

import List from "../../../common/components/List"
import Button from "../../../common/components/Button"

import { Container } from "./styles"
import { RecordsContentHeader as ContainerHeader, Tab } from "../../preferences/view/styles"

function HistoryView() {
  const {
    tabSelected,
    tabTitle,
    onChangeTab,
    onInvokeRecord,
  } = HistoryBusiness()
  const {
    onInvokeNewInvoice,
  } = InvoiceBusiness()
  const {
    onInvokeNewExpense,
  } = ExpenseBusiness()

  return (
    <Container>
      <ContainerHeader>
        <div>
          <Tab isSelect={tabSelected === 0} onClick={() => onChangeTab()}>Notas Fiscais</Tab>
          <Tab isSelect={tabSelected === 1} onClick={() => onChangeTab()}>Despesas</Tab>
        </div>

        <Button 
          onClick={() => 
            onInvokeRecord(tabSelected, onInvokeNewInvoice, onInvokeNewExpense)
          }
        >
          {tabTitle}
        </Button>
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
