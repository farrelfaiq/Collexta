/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = id || @request.auth.role = \"admin, designer\"",
    "updateRule": "@request.auth.id = id || @request.auth.role = \"admin, designer\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id = \"\"",
    "updateRule": "@request.auth.id = \"\""
  }, collection)

  return app.save(collection)
})
