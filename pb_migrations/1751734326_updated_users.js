/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "viewRule": "@request.auth.role = 'admin, user' || @request.auth.id = id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "viewRule": "@request.auth.role = 'admin' || @request.auth.id = id"
  }, collection)

  return app.save(collection)
})
