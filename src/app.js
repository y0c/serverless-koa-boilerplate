import Koa from 'koa';
import koaBody from 'koa-body';
import db from 'db';
import config from 'config';

const app = new Koa();

db.connect();

app.use(koaBody());

app.use(ctx => ctx.body = config.jwtSecret);

export default app;