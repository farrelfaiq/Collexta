/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "listRule": "published=true",
    "viewRule": "published=true"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = \"designer\"",
    "viewRule": "@request.auth.role = \"designer\""
  }, collection)

  return app.save(collection)
})
