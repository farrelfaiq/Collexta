/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = \"\"",
    "viewRule": "@request.auth.id = \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "listRule": "published = true || @request.auth.id = designer",
    "viewRule": "published = true"
  }, collection)

  return app.save(collection)
})
