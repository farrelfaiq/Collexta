/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"username\"",
    "deleteRule": "@request.auth.role = \"username\"",
    "updateRule": "@request.auth.role = \"username\"",
    "viewRule": "published = true || @request.auth.id = username"
  }, collection)

  // update field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1736455494",
    "hidden": false,
    "id": "relation3013664347",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "username",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2890518295")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"designer\"",
    "deleteRule": "@request.auth.role = \"designer\"",
    "updateRule": "@request.auth.role = \"designer\"",
    "viewRule": "published = true || @request.auth.id = designer"
  }, collection)

  // update field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1736455494",
    "hidden": false,
    "id": "relation3013664347",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "designer",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
