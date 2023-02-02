// 引入koa
import Koa from 'koa'
import http from 'http'
import * as dotenv from 'dotenv'

dotenv.config()

// 创建koa实例
const app = new Koa()
// 创建服务器
const server: http.Server = new http.Server(app.callback())
// 中间件
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

const port = process.env.PORT || 8700

// 监听端口
app.listen(port, () => {
  console.log('run success')
  console.log(`app started at port ${port}...`)
})
