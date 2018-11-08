
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
<<<<<<< HEAD
const configs = require('../config')
const app = new Koa()
const host = configs.API_HOST || '127.0.0.1'
const port = configs.API_PORT || 3000
=======

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
>>>>>>> c2cfcf61ec765ad444435b97222f7c827ed3640e

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')
<<<<<<< HEAD
=======

>>>>>>> c2cfcf61ec765ad444435b97222f7c827ed3640e
async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

<<<<<<< HEAD
  app.listen(3000,(item)=>{
    console.log('Server listening on 3000')
  })
=======
  app.listen(port, host)
>>>>>>> c2cfcf61ec765ad444435b97222f7c827ed3640e
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
