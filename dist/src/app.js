"use strict";

var reactSsr = require('../dist/src/server/middlewares/react-ssr').default;

var Koa = require("koa2");

var KoaStatic = require("koa-static");

var path = require('path');

var app = new Koa();
app.use(KoaStatic('./dist/static'));
app.use(reactSsr);
app.listen(9000);