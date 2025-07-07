module.exports = function (app) {
  app.onRequest((ctx, next) => {
    // Ganti * dengan domain spesifik saat production
    ctx.response.setHeader("Access-Control-Allow-Origin", "https://collexta.my.id");

    ctx.response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    ctx.response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (ctx.req.method === "OPTIONS") {
      ctx.res.end();
      return;
    }

    return next();
  });
};
