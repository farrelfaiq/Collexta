/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3997068640",
    "max": 0,
    "min": 0,
    "name": "payment_note",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file2850539799",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "payment_proof",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // remove field
  collection.fields.removeById("text3997068640")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "file2850539799",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "bukti_transfer",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
