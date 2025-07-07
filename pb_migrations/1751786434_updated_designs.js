/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.role = \"designer\" || @request.auth.role = \"admin\"",
    "listRule": "@request.auth.role = \"designer\" || @request.auth.role = \"admin\" || @request.auth.role = \"user\"",
    "updateRule": "@request.auth.role = \"designer\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = id || @request.auth.role = \"designer\"",
    "listRule": "@request.auth.role = \"designer\" || @request.auth.role = \"admin\"",
    "updateRule": "@request.auth.id = id || @request.auth.role = \"designer\""
  }, collection)

  return app.save(collection)
})
