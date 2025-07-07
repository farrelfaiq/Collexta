/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = ''",
    "updateRule": "@request.auth.id = ''"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.role = \"admin\"",
    "updateRule": "@request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
})
