/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "viewRule": "published = true || @request.auth.role = \"designer, admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "viewRule": "published = true || @request.auth.id = designer"
  }, collection)

  return app.save(collection)
})
