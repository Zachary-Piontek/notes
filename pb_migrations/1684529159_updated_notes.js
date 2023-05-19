migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cpbn35pg1hwpz9s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "memhaj7c",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cpbn35pg1hwpz9s")

  // remove
  collection.schema.removeField("memhaj7c")

  return dao.saveCollection(collection)
})
