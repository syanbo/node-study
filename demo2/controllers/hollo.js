const fn_hello = async (ctx, next) => {
  const name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

module.exports = [
  {
    path: "/hello/:name",
    method: "GET",
    handler: fn_hello
  }
];
