/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\" || @request.auth.role = \"=user\"",
    "viewRule": "@request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\" || @request.auth.role = \"=user\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\"",
    "viewRule": "@request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
})
