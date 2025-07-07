/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool1547992806",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool1547992806",
    "name": "emailVisibility",
    "presentable": true,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  return app.save(collection)
})
