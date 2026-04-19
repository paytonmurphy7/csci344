module.exports = {
  "resource": "Favorite",
  "fields": [
    {
      "name": "note",
      "type": "string",
      "storageType": "string",
      "required": false,
      "relation": null,
      "query": null
    },
    {
      "name": "sneaker",
      "type": "Sneaker",
      "storageType": "integer",
      "required": true,
      "relation": {
        "resourceType": "Sneaker",
        "targetField": "id"
      },
      "query": {
        "param": "sneaker",
        "op": "eq"
      }
    }
  ]
};
