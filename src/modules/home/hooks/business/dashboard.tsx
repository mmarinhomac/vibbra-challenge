import { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts'

import { useHomeContext } from '../../context'

import { getBudgetRequest } from '../../../../services/budget'
import { getInvoicesRequest } from '../../../../services/invoice'
import { getExpensesRequest } from '../../../../services/expense'

interface xaxis {
  type: 'category' | 'datetime' | 'numeric' | undefined
  axisBorder: any
  axisTicks: any
  categories: string[]
}

interface CustomOptions extends ApexOptions {
  xaxis: xaxis
}

const options: CustomOptions = {
  colors: ['#a2d2ff', '#ef233c'],
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
    categories: [],
  },
  fill: {
    opacity: 1,
  },
}

export default function DashboardBusiness() {
  const context = useHomeContext()

  const [initialRender, setInitialRender] = useState(true)

  // Handle initial data
  useEffect(() => {
    if (initialRender) {
      getBudgetRequest().then((data: any) => {
        context.setBillingAvailable([
          {
            name: 'Receita Atual',
            data: [data.currentRevenue],
          },
          {
            name: 'Limite de Receita Restante',
            data: [data.maximumBillingLimit - data.currentRevenue],
          },
        ])
        context.setFilterYear(data.year)
      })
      getInvoicesRequest().then((data: any) => {
        const months = data.invoices.map(
          (invoice: any) =>
            String(invoice.createdAt).substring(3, 6) +
            String(invoice.createdAt).substring(8, 10)
        )
        const series = data.invoices.map((invoice: any) => invoice.value)

        context.setMonthlyInvoices({
          months,
          data: series,
        })
      })
      getExpensesRequest().then((data: any) => {
        const months = data.expenses.map(
          (expense: any) =>
            String(expense.createdAt).substring(3, 6) +
            String(expense.createdAt).substring(8, 10)
        )
        const categories = data.expenses.map(
          (expense: any) => expense.categorieName
        )
        const series = data.expenses.map((expense: any) => expense.value)

        context.setMonthlyExpenses({
          months,
          data: series,
        })
        context.setExpensesByCategories({
          categories,
          data: series,
        })
      })
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    onChangeFilterYear: ({ id, value }: { id: string; value: string }) =>
      context.setFilterYear(value),
    billingAvailable: () => {
      if (context.filterYear && context.billingAvailable) {
        const optionsUpdated: CustomOptions = JSON.parse(
          JSON.stringify(options)
        )
        const filterYear = context.filterYear
        const billingAvailable = context.billingAvailable

        optionsUpdated.xaxis.categories = [filterYear]
        const series = billingAvailable

        return {
          show: true,
          options: optionsUpdated,
          series,
        }
      } else {
        return {
          show: false,
        }
      }
    },
    monthlyInvoices: () => {
      if (context.filterYear && context.monthlyInvoices) {
        const optionsUpdated: CustomOptions = JSON.parse(
          JSON.stringify(options)
        )
        const filterYear = context.filterYear
        const monthlyInvoices = context.monthlyInvoices

        optionsUpdated.colors = ['#affc41']

        const categories: string[] = []
        const dataSeries: number[] = []
        monthlyInvoices.months.forEach((item, index) => {
          if (item.substring(3, 5) === filterYear.substring(2, 4)) {
            categories.push(item)
            dataSeries.push(monthlyInvoices.data[index])
          }
        })

        optionsUpdated.xaxis.categories = categories
        const series = [
          {
            name: 'Receita',
            data: dataSeries,
          },
        ]

        return {
          show: true,
          options: optionsUpdated,
          series,
        }
      } else {
        return {
          show: false,
        }
      }
    },
    monthlyExpenses: () => {
      if (context.filterYear && context.monthlyExpenses) {
        const optionsUpdated: CustomOptions = JSON.parse(
          JSON.stringify(options)
        )
        const filterYear = context.filterYear
        const monthlyExpenses = context.monthlyExpenses

        optionsUpdated.colors = ['#ef233c']

        const categories: string[] = []
        const dataSeries: number[] = []
        monthlyExpenses.months.forEach((item, index) => {
          if (item.substring(3, 5) === filterYear.substring(2, 4)) {
            categories.push(item)
            dataSeries.push(monthlyExpenses.data[index])
          }
        })

        optionsUpdated.xaxis.categories = categories
        const series = [
          {
            name: 'Despesa',
            data: dataSeries,
          },
        ]

        return {
          show: true,
          options: optionsUpdated,
          series,
        }
      } else {
        return {
          show: false,
        }
      }
    },
    monthlyRelationInvoicesExpenses: () => {
      if (
        context.filterYear &&
        context.monthlyInvoices &&
        context.monthlyExpenses
      ) {
        const optionsUpdated: CustomOptions = JSON.parse(
          JSON.stringify(options)
        )
        const filterYear = context.filterYear
        const monthlyInvoices = context.monthlyInvoices
        const monthlyExpenses = context.monthlyExpenses

        optionsUpdated.colors = ['#affc41', '#ef233c']

        const categories: string[] = []
        const dataSeries1: number[] = []
        const dataSeries2: number[] = []
        monthlyExpenses.months.forEach((item, index) => {
          if (item.substring(3, 5) === filterYear.substring(2, 4)) {
            categories.push(item)
            dataSeries1.push(monthlyInvoices.data[index])
            dataSeries2.push(monthlyExpenses.data[index])
          }
        })

        optionsUpdated.xaxis.categories = categories
        const series = [
          {
            name: 'Receita',
            data: dataSeries1,
          },
          {
            name: 'Despesa',
            data: dataSeries2,
          },
        ]

        return {
          show: true,
          options: optionsUpdated,
          series,
        }
      } else {
        return {
          show: false,
        }
      }
    },
    expensesByCategories: () => {
      if (context.expensesByCategories) {
        const optionsUpdated: CustomOptions = JSON.parse(
          JSON.stringify(options)
        )
        const expensesByCategories = context.expensesByCategories

        optionsUpdated.colors = ['#ef233c']
        optionsUpdated.xaxis.categories = expensesByCategories.categories
        const series = [
          {
            name: 'Categoria',
            data: expensesByCategories.data,
          },
        ]

        return {
          show: true,
          options: optionsUpdated,
          series,
        }
      } else {
        return {
          show: false,
        }
      }
    },
  }
}
