migrate((db) => {
  const collection = new Collection({
    "id": "cpbn35pg1hwpz9s",
    "created": "2023-05-19 19:35:34.212Z",
    "updated": "2023-05-19 19:35:34.212Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cl2jiujp",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cpbn35pg1hwpz9s");

  return dao.deleteCollection(collection);
})
