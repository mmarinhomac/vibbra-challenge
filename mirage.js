import { createServer, Model, Response } from 'miragejs'

export function makeServer() {
  let server = createServer({
    models: {
      user: Model,
      budget: Model,
      preference: Model,
      companie: Model,
      categorie: Model,
      expense: Model,
      invoice: Model,
    },

    seeds(server) {
      server.db.loadData({
        // System Mock
        users: [
          {
            email: 'srvibbraneo@gmail.com',
            name: 'Sr. Vibbraneo',
            cnpj: '18804552000118',
            companyName: 'Vibbraneo Transportes Ltda',
            phone: '1137616136',
            password: '123456',
          }
        ],

        // Business Mock
        budgets: [{ maximumBillingLimit: 81000 }],
        preferences: [{ notification: ['email', 'sms'] }],
        companies: [
          {
            cnpj: '75.890.985/0001-77',
            name: 'Lara e Márcio Restaurante ME',
            socialReason: 'Lara e Márcio Restaurante ME'
          },
          {
            cnpj: '71.170.884/0001-70',
            name: 'Emanuel e Larissa Marcenaria Ltda',
            socialReason: 'Emanuel e Larissa Marcenaria Ltda'
          },
          {
            cnpj: '31.303.008/0001-50',
            name: 'Antonio e Antonio Buffet Ltda',
            socialReason: 'Antonio e Antonio Buffet Ltda'
          }
        ],
        categories: [
          {
            name: 'Almoço',
            description: 'Almoço Semana',
            filed: false
          },
          {
            name: 'Almoço',
            description: 'Almoço Mês',
            filed: false
          },
          {
            name: 'Transporte',
            description: 'Transporte - Uber ou Taxi / Ida e Volta',
            filed: false
          },
          {
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

      this.post('/auth', (schema, request) => {
        const email = request.requestBody.email
        const password = request.requestBody.password
        const { attrs } = schema.users.findBy({ email })

        if (attrs.password !== password) {
          return new Response(401, { some: 'header' }, { errors: [ 'Username or password is invalid' ] });
        }

        delete attrs.password
        
        return attrs
      })

      this.post('/user', (schema, request) => {
        const body = request.requestBody
        const { attrs } = schema.users.create(body)

        delete attrs.password
        
        return attrs
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
