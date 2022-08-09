import { createServer, Model } from 'miragejs'

export function makeServer() {
  let server = createServer({
    models: {
      budget: Model,
      preference: Model,
      companie: Model,
      categorie: Model,
      expense: Model,
      invoice: Model,
    },

    seeds(server) {
      server.db.loadData({
        budgets: [{ maximumBillingLimit: 81000 }],
        preferences: [{ notification: ['email', 'sms'] }],
        companies: [
          {
            id: 1,
            cnpj: '75.890.985/0001-77',
            name: 'Lara e Márcio Restaurante ME',
            socialReason: 'Lara e Márcio Restaurante ME'
          },
          {
            id: 2,
            cnpj: '71.170.884/0001-70',
            name: 'Emanuel e Larissa Marcenaria Ltda',
            socialReason: 'Emanuel e Larissa Marcenaria Ltda'
          },
          {
            id: 3,
            cnpj: '31.303.008/0001-50',
            name: 'Antonio e Antonio Buffet Ltda',
            socialReason: 'Antonio e Antonio Buffet Ltda'
          }
        ],
        categories: [
          {
            id: 1,
            name: 'Almoço',
            description: 'Almoço Semana',
            filed: false
          },
          {
            id: 2,
            name: 'Almoço',
            description: 'Almoço Mês',
            filed: false
          },
          {
            id: 3,
            name: 'Transporte',
            description: 'Transporte - Uber ou Taxi / Ida e Volta',
            filed: false
          },
          {
            id: 4,
            name: 'Manutenção',
            description: 'Manuntenção - Avulso',
            filed: false
          },
        ],
        invoices: [
          {
            companieId: 1,
            value: 5000,
            invoiceNumber: 126542,
            description: 'Serviços Técnicos',
            createdAt: '25/07/2022',
            payDay: '05/08/2022'
          },
          {
            companieId: 2,
            value: 12750,
            invoiceNumber: 135495,
            description: 'Serviços Técnicos',
            createdAt: '25/08/2022',
            payDay: '05/09/2022'
          }
        ],
        expenses: [
          {
            categorieId: 3,
            companieId: 1,
            value: 50,
            name: 'Transporte - Uber ou Taxi / Ida e Volta',
            createdAt: '06/07/2022',
            dateRefCompetency: '01/07/2022'
          },
          {
            categorieId: 3,
            companieId: 2,
            value: 250,
            name: 'Transporte - Uber ou Taxi / Ida e Volta',
            createdAt: '06/07/2022',
            dateRefCompetency: '01/07/2022'
          },
          {
            categorieId: 1,
            companieId: 2,
            value: 215.25,
            name: 'Almoço Semana',
            createdAt: '06/07/2022',
            dateRefCompetency: '01/07/2022'
          }
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.passthrough(request => {
        if (String(request.url).match('/_next/static')) return true
      })

      this.get('/budget', schema => {
        return schema.first('budget')
      })

      this.get('/preferences', schema => {
        return schema.first('preference')
      })

      this.get('/companies', schema => {
        return schema.all('companie')
      })

      this.get('/categories', schema => {
        return schema.all('categorie')
      })

      this.get('/expenses', schema => {
        return schema.all('expense')
      })

      this.get('/invoices', schema => {
        return schema.all('invoice')
      })
    },
  })

  return server
}
