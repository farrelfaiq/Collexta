/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "@request.auth.role = 'admin' || @request.auth.id = id",
    "listRule": "@request.auth.role = 'admin' || @request.auth.id = id",
    "updateRule": "@request.auth.role = 'admin' || @request.auth.id = id",
    "viewRule": "@request.auth.role = 'admin' || @request.auth.id = id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "listRule": "@request.auth.id = user",
    "updateRule": "@request.auth.id = user",
    "viewRule": "@request.auth.id = user"
  }, collection)

  return app.save(collection)
})
