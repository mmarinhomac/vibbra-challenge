import dynamic from 'next/dynamic'

import { withAuth } from '../../../common/hooks/withAuth'

import BudgetBusiness from '../business/budget'

import Select from '../../../common/components/Select'
import Button from '../../../common/components/Button'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

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
    billingAvailable,
    monthlyInvoices
  } = BudgetBusiness()

  return (
    <Container>
      <ContentHeader>
        <Select
          id='filterYear'
          label='Filtrar Ano'
          options={['2022']}
          onChange={() => {}}
        />

        <HStack>
          <Button>Nova Nota Fiscal</Button>
          <Button>Nova Despesa</Button>
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
            options={billingAvailable().options} 
            series={billingAvailable().series} 
            width='100%' 
            height={180} 
          />
        </CardChart>
      </BiRowContent>
    </Container>
  )
}

export default withAuth(HomeView)
