package main

import (
  "github.com/pocketbase/pocketbase"
  "github.com/pocketbase/pocketbase/models"
  "log"
)

// Fungsi yang akan dipanggil di main.go
func registerHooks(app *pocketbase.PocketBase) {
  app.OnRecordAfterCreateRequest("orders").Add(func(e *models.Record) error {
    log.Println("New order created:", e.ID)
    return nil
  })
}
