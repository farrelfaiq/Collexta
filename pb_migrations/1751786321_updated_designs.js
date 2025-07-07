/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"designer\" || @request.auth.role = \"admin\"",
    "listRule": "@request.auth.role = \"designer\" || @request.auth.role = \"admin\"",
    "viewRule": "@request.auth.role = \"designer\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"designer\"",
    "listRule": "@request.auth.id = \"\"",
    "viewRule": "@request.auth.id = \"\""
  }, collection)

  return app.save(collection)
})
