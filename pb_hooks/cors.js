// pocketbase/pb_hooks/cors.js
module.exports = function (app) {
  app.onRequest((ctx, next) => {
    // Ganti ini jika kamu hanya ingin mengizinkan domain tertentu
    ctx.response.setHeader("Access-Control-Allow-Origin", "*");

    ctx.response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    ctx.response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (ctx.req.method === "OPTIONS") {
      ctx.res.end();
      return;
    }

    return next();
  });
};
