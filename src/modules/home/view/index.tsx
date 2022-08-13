import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

import { withAuth } from '../../../common/hooks/withAuth'

import InvoiceBusiness from '../business/invoice'
import ExpenseBusiness from '../business/expense'
import DashboardBusiness from '../business/dashboard'

import Select from '../../../common/components/Select'
import Button from '../../../common/components/Button'

import { 
  Container,
  ContentHeader,
  Line,
  HStack,
  BiRowContent,
  CardChart,
} from './styles'

function HomeView() {
  const {
    onChangeFilterYear,
    billingAvailable,
    monthlyInvoices,
    monthlyExpenses,
    monthlyRelationInvoicesExpenses,
    expensesByCategories,
  } = DashboardBusiness()
  const {
    onInvokeNewInvoice,
  } = InvoiceBusiness()
  const {
    onInvokeNewExpense,
  } = ExpenseBusiness()

  return (
    <Container>
      <ContentHeader>
        <Select
          id='filterYear'
          label='Filtrar Ano'
          options={['2021', '2022']}
          onChange={onChangeFilterYear}
        />

        <HStack>
          <Button onClick={onInvokeNewInvoice}>Nova Nota Fiscal</Button>
          <Button onClick={onInvokeNewExpense}>Nova Despesa</Button>
        </HStack>
      </ContentHeader>

      <Line />

      <BiRowContent>
        <CardChart>
          <Chart 
            type="bar" 
            options={billingAvailable().options} 
            series={billingAvailable().series} 
            width='100%' 
            height={180} 
          />
        </CardChart>
        <CardChart>
          <Chart 
            type="bar" 
            options={monthlyInvoices().options} 
            series={monthlyInvoices().series} 
            width='100%' 
            height={180} 
          />
        </CardChart>
      </BiRowContent>
      <BiRowContent>
        <CardChart>
          <Chart 
            type="bar" 
            options={monthlyExpenses().options} 
            series={monthlyExpenses().series} 
            width='100%' 
            height={180} 
          />
        </CardChart>
        <CardChart>
          <Chart 
            type="bar" 
            options={monthlyRelationInvoicesExpenses().options} 
            series={monthlyRelationInvoicesExpenses().series} 
            width='100%' 
            height={180} 
          />
        </CardChart>
      </BiRowContent>
      <BiRowContent>
        <CardChart>
          <Chart 
            type="bar" 
            options={expensesByCategories().options} 
            series={expensesByCategories().series} 
            width='100%' 
            height={280} 
          />
        </CardChart>
      </BiRowContent>
    </Container>
  )
}

export default withAuth(HomeView)
