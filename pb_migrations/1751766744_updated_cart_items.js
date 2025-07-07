/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1078244565")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = user.id",
    "listRule": "@request.auth.id = user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1078244565")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.id = user",
    "listRule": null
  }, collection)

  return app.save(collection)
})
