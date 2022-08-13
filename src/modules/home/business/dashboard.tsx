import { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts'

import { useHomeContext } from '../context';

import { getBudgetRequest } from '../../../services/budget'
import { getInvoicesRequest } from '../../../services/invoice';
import { getExpensesRequest } from '../../../services/expense';

interface xaxis {
  type: "category" | "datetime" | "numeric" | undefined
  axisBorder: any
  axisTicks: any
  categories: string[]
}

interface CustomOptions extends ApexOptions {
  xaxis: xaxis
}

const options : CustomOptions = {
  colors:['#a2d2ff', '#ef233c'],
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: '#919191',
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: 'category',
    axisBorder: {
      color: '#919191',
    },
    axisTicks: {
      color: '#919191',
    },
    categories: []
  },
  fill: {
    opacity: 1,
  }
};

export default function DashboardBusiness() {
  const context = useHomeContext()

  const [initialRender, setInitialRender] = useState(true)

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getBudgetRequest()
        .then((data: any) => {
          context.setBillingAvailable([
            {
              name: 'Receita Atual',
              data: [data.currentRevenue]
            },
            {
              name: 'Limite de Receita Restante',
              data: [data.maximumBillingLimit - data.currentRevenue]
            }
          ])
          context.setFilterYear(data.year)
        })
      getInvoicesRequest()
        .then((data: any) => {
          const months = data.invoices.map((invoice: any) => 
            String(invoice.createdAt).substring(3, 6) + String(invoice.createdAt).substring(8, 10))
          const series = data.invoices.map((invoice: any) => 
            invoice.value)

          context.setMonthlyInvoices({
            months,
            data: series
          })
        })
      getExpensesRequest()
        .then((data: any) => {
          const months = data.expenses.map((expense: any) => 
            String(expense.createdAt).substring(3, 6) + String(expense.createdAt).substring(8, 10))
          const categories = data.expenses.map((expense: any) => 
            expense.categorieName)
          const series = data.expenses.map((expense: any) => 
            expense.value)

          context.setMonthlyExpenses({
            months,
            data: series
          })
          context.setExpensesByCategories({
            categories,
            data: series
          })
        })
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    onChangeFilterYear: ({ id, value} : { id: string, value: string}) => context.setFilterYear(value),
    billingAvailable: () => {
      const optionsUpdated: CustomOptions = JSON.parse(JSON.stringify(options))
      optionsUpdated.xaxis.categories = [context.filterYear]
      const series = context.billingAvailable
      return {
        options: optionsUpdated,
        series
      }
    },
    monthlyInvoices: () => {
      const optionsUpdated: CustomOptions = JSON.parse(JSON.stringify(options))
      optionsUpdated.colors = ['#affc41']

      const categories: string[] = []
      const dataSeries: number[] = []
      context.monthlyInvoices.months.forEach((item, index) => {
        if (item.substring(3, 5) == context.filterYear.substring(2, 4)) {
          categories.push(item)
          dataSeries.push(context.monthlyInvoices.data[index])
        }
      })

      optionsUpdated.xaxis.categories = categories
      const series = [{
        name: 'Receita',
        data: dataSeries
      }]

      return {
        options: optionsUpdated,
        series
      }
    },
    monthlyExpenses: () => {
      const optionsUpdated: CustomOptions = JSON.parse(JSON.stringify(options))
      optionsUpdated.colors = ['#ef233c']
      
      const categories: string[] = []
      const dataSeries: number[] = []
      context.monthlyExpenses.months.forEach((item, index) => {
        if (item.substring(3, 5) == context.filterYear.substring(2, 4)) {
          categories.push(item)
          dataSeries.push(context.monthlyExpenses.data[index])
        }
      })

      optionsUpdated.xaxis.categories = categories
      const series = [{
        name: 'Despesa',
        data: dataSeries
      }]

      return {
        options: optionsUpdated,
        series
      }
    },
    monthlyRelationInvoicesExpenses: () => {
      const optionsUpdated: CustomOptions = JSON.parse(JSON.stringify(options))
      optionsUpdated.colors = ['#affc41', '#ef233c']

      const categories: string[] = []
      const dataSeries1: number[] = []
      const dataSeries2: number[] = []
      context.monthlyExpenses.months.forEach((item, index) => {
        if (item.substring(3, 5) == context.filterYear.substring(2, 4)) {
          categories.push(item)
          dataSeries1.push(context.monthlyInvoices.data[index])
          dataSeries2.push(context.monthlyExpenses.data[index])
        }
      })

      optionsUpdated.xaxis.categories = categories
      const series = [
        {
          name: 'Receita',
          data: dataSeries1
        },
        {
          name: 'Despesa',
          data: dataSeries2
        }
      ]

      return {
        options: optionsUpdated,
        series
      }
    },
    expensesByCategories: () => {
      const optionsUpdated: CustomOptions = JSON.parse(JSON.stringify(options))
      optionsUpdated.colors = ['#ef233c']
      optionsUpdated.xaxis.categories = context.expensesByCategories.categories
      const series = [{
        name: 'Categoria',
        data: context.expensesByCategories.data
      }]

      return {
        options: optionsUpdated,
        series
      }
    },
  }
}