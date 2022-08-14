import { withAuth } from '../../../common/hooks/withAuth'

import PreferencesCore from '../core'
import BudgetBusiness from '../hooks/business/budget'
import PreferencesBusiness from '../hooks/business/preferences'
import CompanyBusiness from '../hooks/business/company'
import CategoryBusiness from '../hooks/business/category'

import Button from '../../../common/components/Button'
import Checkbox from '../../../common/components/Checkbox'
import Input from '../../../common/components/Input'
import List from '../../../common/components/List'

import {
  Container,
  Line,
  GeneralContent,
  RecordsContent,
  RecordsContentHeader,
  Tab,
  VStack,
  HStack,
} from './styles'

function PreferencesView() {
  const {
    tabSelected,
    onChangeTab,
    onInvokeRecord,
    tabTitle,
    onSelectDataList,
  } = PreferencesCore()
  const { maximumBillingLimit, onSaveMaximumBillingLimit } = BudgetBusiness()
  const { emailActived, smsActived, onChangePreferences } =
    PreferencesBusiness()
  const { companyList, onInvokeNewCompany, onInvokeEditCompany } =
    CompanyBusiness()
  const { categoryList, onInvokeNewCategory, onInvokeEditCategory } =
    CategoryBusiness()

  return (
    <Container>
      <h2>Gerais</h2>
      <Line />
      <GeneralContent>
        <VStack>
          <span>Limite máximo de faturamento para MEI</span>
          <HStack>
            <Input
              id="limitBilling"
              initialValue={maximumBillingLimit}
              onChange={() => {}}
            />
            <Button onClick={onSaveMaximumBillingLimit}>Salvar</Button>
          </HStack>
        </VStack>
        <VStack>
          <span>Notificações</span>
          <HStack>
            <Checkbox
              id="emailNotification"
              initialValue={emailActived()}
              label="E-mail"
              onChange={() => onChangePreferences('email')}
            />
            <Checkbox
              id="smsNotification"
              initialValue={smsActived()}
              label="SMS"
              onChange={() => onChangePreferences('sms')}
            />
          </HStack>
        </VStack>
      </GeneralContent>

      <h2>Cadastros</h2>
      <Line />
      <RecordsContent>
        <RecordsContentHeader>
          <div>
            <Tab isSelect={tabSelected === 0} onClick={() => onChangeTab(0)}>
              Empresas
            </Tab>
            <Tab isSelect={tabSelected === 1} onClick={() => onChangeTab(1)}>
              Categorias
            </Tab>
          </div>

          <Button
            onClick={() =>
              onInvokeRecord(
                tabSelected,
                onInvokeNewCompany,
                onInvokeNewCategory
              )
            }
          >
            {tabTitle}
          </Button>
        </RecordsContentHeader>

        <List
          onEdit={() =>
            onInvokeRecord(
              tabSelected,
              onInvokeEditCompany,
              onInvokeEditCategory
            )
          }
          data={onSelectDataList(tabSelected, companyList(), categoryList())}
        />
      </RecordsContent>
    </Container>
  )
}

export default withAuth(PreferencesView)
