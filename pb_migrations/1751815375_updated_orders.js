/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != ''",
    "deleteRule": "@request.auth.role = \"admin\"",
    "listRule": "@request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\"",
    "updateRule": "@request.auth.role = \"admin\"",
    "viewRule": "@request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = ''",
    "deleteRule": "@request.auth.id = ''",
    "listRule": "@request.auth.id = ''",
    "updateRule": "@request.auth.id = ''",
    "viewRule": "@request.auth.id = ''"
  }, collection)

  return app.save(collection)
})
