const reactSsr = require('../dist/src/server/middlewares/react-ssr').default;
const Koa = require("koa2")
const KoaStatic = require("koa-static")
const path = require('path')

const app = new Koa()

app.use(KoaStatic('./dist/static'))

app.use(reactSsr);

app.listen(9000)