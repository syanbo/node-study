// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
// 注意require('koa-router')返回的是函数:
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log(`---${ctx.request.method} ${ctx.request.url}`); // 打印URL
  await next(); // 调用下一个middleware
});

// add url-route:
router.get("/hello/:name", async (ctx, next) => {
  let name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

// 对于任何请求，app将调用该异步函数处理请求：
router.get("/", async (ctx, next) => {
  await next();
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello, koa2!!</h1>";
});

router.post("/signin", async (ctx, next) => {
  let name = ctx.request.body.name || "",
    password = ctx.request.body.password || "";
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === "koa" && password === "12345") {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});

// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(3001);
console.log("app started at port 3000...");
