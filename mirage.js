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
            companyRegister: '18804552000118',
            companyName: 'Vibbraneo Transportes Ltda',
            phone: '1137616136',
            password: '123456',
          },
          {
            email: 'test',
            name: 'Sr. Vibbraneo',
            companyRegister: '18804552000118',
            companyName: 'Vibbraneo Transportes Ltda',
            phone: '1137616136',
            password: '1',
          }
        ],

        // Business Mock
        budgets: [
          { 
            maximumBillingLimit: 81000, 
            currentRevenue: 25750,
            year: '2022'
          },
        ],
        preferences: [{ notification: ['email'] }],
        companies: [
          {
            companyRegister: '75890985000177',
            name: 'Lara e Márcio Restaurante ME',
            socialReason: 'Lara e Márcio Restaurante ME'
          },
          {
            companyRegister: '71170884000170',
            name: 'Emanuel e Larissa Marcenaria Ltda',
            socialReason: 'Emanuel e Larissa Marcenaria Ltda'
          },
          {
            companyRegister: '31303008000150',
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
            description: 'Consultoria',
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
          },
          {
            companieId: 3,
            value: 8000,
            invoiceNumber: 135495,
            description: 'Serviços Técnicos',
            createdAt: '25/09/2022',
            payDay: '05/09/2022'
          }
        ],
        expenses: [
          {
            categorieId: 3,
            categorieName: 'Serviços Técnicos',
            companieId: 1,
            value: 50,
            name: 'Transporte - Uber ou Taxi / Ida e Volta',
            createdAt: '25/07/2022',
            dateRefCompetency: '01/07/2022'
          },
          {
            categorieId: 3,
            categorieName: 'Serviços Técnicos',
            companieId: 2,
            value: 250,
            name: 'Transporte - Uber ou Taxi / Ida e Volta',
            createdAt: '25/08/2022',
            dateRefCompetency: '01/07/2022'
          },
          {
            categorieId: 1,
            categorieName: 'Consultoria',
            companieId: 3,
            value: 215.25,
            name: 'Almoço Semana',
            createdAt: '25/09/2022',
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
        const email = JSON.parse(request.requestBody).email
        const password = JSON.parse(request.requestBody).password

        const data = schema.users.findBy({ email })

        if (!data || (data.password !== password)) {
          return new Response(404, { some: 'header' }, { errors: [ 'Usuário ou senha inválido' ] })
        }

        delete data.attrs.password
        
        return { ...data.attrs, token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }
      })

      // test
      this.get('/users', (schema, request) => {
        return schema.users.all()
      })

      this.post('/user', (schema, request) => {
        const body = JSON.parse(request.requestBody)
        console.log(request.requestBody)
        const { attrs } = schema.users.create(body)

        delete attrs.password
        
        return attrs
      })

      this.get('/budget', schema => {
        const { attrs } = schema.first('budget')
        return attrs
      })

      this.put('/budget', (schema, request) => {
        const body = JSON.parse(request.requestBody)
        return schema.budgets.find(1).update(body)
      })

      this.get('/preferences', schema => {
        const { attrs } = schema.first('preference')
        return attrs
      })

      this.put('/preferences', (schema, request) => {
        const body = JSON.parse(request.requestBody)
        return schema.preferences.find(1).update(body)
      })

      this.get('/companies', schema => {
        return schema.companies.all()
      })

      this.post('/companies', (schema, request) => {
        const body = JSON.parse(request.requestBody)
        return schema.companies.create(body)
      })

      this.put('/companies/:id', (schema, request) => {
        const id = request.params.id
        const body = JSON.parse(request.requestBody)
        return schema.companies.find(id).update(body)
      })

      this.get('/categories', schema => {
        return schema.categories.all()
      })

      this.post('/categories', (schema, request) => {
        const body = JSON.parse(request.requestBody)
        return schema.categories.create(body)
      })

      this.put('/categories/:id', schema => {
        const id = request.params.id
        const body = JSON.parse(request.requestBody)
        return schema.categories.find(id).update(body)
      })

      this.get('/invoices', schema => {
        return schema.invoices.all()
      })

      this.post('/invoices', (schema, request) => {
        const { attrs } = schema.first('budget')
        
        const body = JSON.parse(request.requestBody)
        const currentRevenueUpdated = attrs.currentRevenue + body.value
        
        schema.budgets.find(1).update({ currentRevenue: currentRevenueUpdated })
        return schema.invoices.create(body)
      })

      this.put('/invoices/:id', schema => {
        const id = request.params.id
        const body = JSON.parse(request.requestBody)
        return schema.invoices.find(id).update(body)
      })

      this.delete('/invoices/:id', schema => {
        const id = request.params.id
        return schema.invoices.find(id).destroy()
      })

      this.get('/expenses', schema => {
        return schema.expenses.all()
      })

      this.post('/expenses', (schema, request) => {
        const body = JSON.parse(request.requestBody)
        return schema.expenses.create(body)
      })

      this.put('/expenses/:id', schema => {
        const id = request.params.id
        const body = JSON.parse(request.requestBody)
        return schema.expenses.find(id).update(body)
      })

      this.delete('/expenses/:id', schema => {
        const id = request.params.id
        return schema.expenses.find(id).destroy()
      })
    },
  })

  return server
}
