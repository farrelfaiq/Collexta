/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" || @request.auth.role = \"designer\" || @request.auth.role = \"admin\"",
    "deleteRule": "@request.auth.id != \"\" || @request.auth.role = \"designer\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != ''",
    "deleteRule": "@request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
})
