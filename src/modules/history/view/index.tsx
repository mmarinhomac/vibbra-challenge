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
    onSelectDataList,
  } = HistoryBusiness()
  const {
    invoiceList,
    onInvokeNewInvoice,
  } = InvoiceBusiness()
  const {
    expenseList,
    onInvokeNewExpense,
  } = ExpenseBusiness()

  return (
    <Container>
      <ContainerHeader>
        <div>
          <Tab isSelect={tabSelected === 0} onClick={() => onChangeTab(0)}>Notas Fiscais</Tab>
          <Tab isSelect={tabSelected === 1} onClick={() => onChangeTab(1)}>Despesas</Tab>
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
        data={onSelectDataList(tabSelected, invoiceList, expenseList)}
      />
    </Container>
  )
}

export default withAuth(HistoryView)
