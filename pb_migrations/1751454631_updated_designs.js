/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"designer\"",
    "updateRule": "@request.auth.role = \"designer\"",
    "viewRule": "@request.auth.id = true && @request.auth.role = \"designer\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.role = \"designer\"",
    "updateRule": "@request.auth.id = designer.id",
    "viewRule": "@request.auth.id = designer && @request.auth.role = \"designer\""
  }, collection)

  return app.save(collection)
})
