/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1078244565")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2890518295",
    "hidden": false,
    "id": "relation3444529712",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "design",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1078244565")

  // remove field
  collection.fields.removeById("relation3444529712")

  return app.save(collection)
})
