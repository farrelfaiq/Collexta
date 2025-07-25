/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.role = 'admin' || @request.auth.id = id",
    "updateRule": "@request.auth.role = 'admin' || @request.auth.id = id"
  }, collection)

  return app.save(collection)
})
