import { Server, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {

let server = new Server({
  environment,

    models: {
      email: Model,
    },

  seeds(server) {
    server.create("email", {
        subject: "Email Subject 1",
        from: "dealer@email.com",
        to: "secret1@email.com",
        received: "01/12/2022 4:32 pm",
      });
      server.create("email", {
        subject: "Email Subject 2",
        from: "dealer@email.com",
        to: "secret1@email.com",
        received: "01/12/2022 4:32 pm",
      });
      server.create("email", {
        subject: "Email Subject 3",
        from: "dealer@email.com",
        to: "secret1@email.com",
        received: "01/12/2022 4:32 pm",
      });
      server.create("email", {
        subject: "Email Subject 4",
        from: "dealer@email.com",
        to: "secret1@email.com",
        received: "01/12/2022 4:32 pm",
      });  },

  routes() {

    this.namespace = "api"

    this.get("/emails", schema => {
      return schema.emails.all()
    })
    
  },
  })

  return server
}
