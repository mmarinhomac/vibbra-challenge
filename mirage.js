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
        preferences: [{ notification: ['email', 'sms'] }]
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
    },
  })

  return server
}
