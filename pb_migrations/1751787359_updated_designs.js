/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "listRule": "published = true || @request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = id || @request.auth.role = \"designer\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
})
