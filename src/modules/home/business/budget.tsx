import { useState, useEffect } from 'react'
import { ApexOptions } from 'apexcharts'

import { useHomeContext } from '../context';

import { getBudgetRequest } from '../../../services/budget'
import { getInvoicesRequest } from '../../../services/invoice';

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

export default function BudgetBusiness() {
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
            String(invoice.createdAt).split('/')[1])
          const series = data.invoices.map((invoice: any) => 
            invoice.value)

          context.setMonthlyInvoices({
            months,
            data: series
          })
        })
    }
  }, [initialRender, context])

  useEffect(() => setInitialRender(false), [])

  return {
    billingAvailable: () => {
      const optionsUpdated = { ...options }
      optionsUpdated.xaxis.categories = ['2022']
      const series = context.billingAvailable
      // console.log(optionsUpdated)
      return {
        options: optionsUpdated,
        series
      }
    },
    monthlyInvoices: () => {
      const optionsUpdated = { ...options }
      optionsUpdated.xaxis.categories = context.monthlyInvoices.months
      const series = [{
        name: 'Receita',
        data: context.monthlyInvoices.data
      }]

      return {
        options: optionsUpdated,
        series
      }
    },
    // monthlyExpenses: () => {
    //   
    // },
    // monthlyRelationInvoicesExpenses: () => {
    //   
    // },
    // expensesByCategories: () => {
    //   
    // },
  }
}