/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"designer, admin\"",
    "deleteRule": "@request.auth.role = \"designer, admin\"",
    "listRule": "",
    "updateRule": "@request.auth.role = \"designer, admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"designer\"",
    "deleteRule": "@request.auth.role = \"designer\"",
    "listRule": "published=true",
    "updateRule": "@request.auth.role = \"designer\""
  }, collection)

  return app.save(collection)
})
