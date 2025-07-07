package main

import (
  "github.com/pocketbase/pocketbase"
  "github.com/pocketbase/pocketbase/core"
)

func main() {
  app := pocketbase.New()

  app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
    e.Router.Use(func(next http.Handler) http.Handler {
      return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "https://collexta.my.id")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
        w.Header().Set("Access-Control-Allow-Credentials", "true")

        // Untuk request preflight
        if r.Method == "OPTIONS" {
          w.WriteHeader(http.StatusOK)
          return
        }

        next.ServeHTTP(w, r)
      })
    })

    return nil
  })

  app.Run()
}
