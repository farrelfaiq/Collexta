package main

import (
  "github.com/pocketbase/pocketbase"
  "github.com/pocketbase/pocketbase/middlewares"
  "github.com/labstack/echo/v4"
)

func main() {
  app := pocketbase.New()

  // Middleware CORS
  app.OnBeforeServe().Add(func(e *echo.Echo) error {
    e.Use(middlewares.CorsWithConfig(middlewares.CorsConfig{
      AllowOrigins: []string{"https://collexta.my.id"},
      AllowMethods: []string{"GET", "POST", "PATCH", "DELETE"},
    }))
    return nil
  })

  // ✅ Panggil custom hook
  registerHooks(app)

  app.Run()
}
