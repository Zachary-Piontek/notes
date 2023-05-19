migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cpbn35pg1hwpz9s")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cpbn35pg1hwpz9s")

  collection.name = "title"

  return dao.saveCollection(collection)
})
