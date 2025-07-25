/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = 'user'",
    "viewRule": "@request.auth.role = 'user'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = 'user' || @request.auth.id = id",
    "viewRule": "@request.auth.role = 'user' || @request.auth.id = id"
  }, collection)

  return app.save(collection)
})
