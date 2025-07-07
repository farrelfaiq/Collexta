/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = id || @request.auth.role = 'admin, designer'",
    "listRule": "@request.auth.role = 'admin, designer'",
    "updateRule": "@request.auth.id = id || @request.auth.role = 'admin, designer'",
    "viewRule": "@request.auth.role = 'admin, designer' || @request.auth.id = \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = id || @request.auth.role = 'admin'",
    "listRule": "@request.auth.role = 'admin'",
    "updateRule": "@request.auth.id = id || @request.auth.role = 'admin'",
    "viewRule": "@request.auth.role = 'admin' || @request.auth.id = \"\""
  }, collection)

  return app.save(collection)
})
