package main

import (
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
	"github.com/pocketbase/pocketbase/core"
	"log"
	"net/http"
)

func main() {
	app := pocketbase.New()

	// Tambahkan Middleware CORS
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.Use(func(next http.Handler) http.Handler {
			return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				w.Header().Set("Access-Control-Allow-Origin", "*")
				w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
				w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
				if r.Method == http.MethodOptions {
					w.WriteHeader(http.StatusOK)
					return
				}
				next.ServeHTTP(w, r)
			})
		})
		return nil
	})

	migratecmd.MustRegister(app, app.RootCmd)

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
