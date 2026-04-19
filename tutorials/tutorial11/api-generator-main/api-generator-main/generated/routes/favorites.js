const validator = require("../validators/favorites.js");

module.exports = {
  "type": "Favorite",
  "tableName": "favorites",
  "fileBase": "favorites",
  "path": "/api/favorites",
  "operations": [
    "list",
    "retrieve",
    "create",
    "update",
    "delete"
  ],
  "shareable": false,
  "ownershipEnabled": true,
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
  ],
  "permissions": {
    "list": "owner",
    "retrieve": "owner",
    "create": "user",
    "update": "owner",
    "delete": "owner"
  },
  "queryFilters": [
    {
      "param": "sneaker",
      "fieldName": "sneaker",
      "op": "eq",
      "type": "Sneaker",
      "storageType": "integer",
      "relation": {
        "resourceType": "Sneaker",
        "targetField": "id"
      }
    },
    {
      "param": "owner_id",
      "fieldName": "owner_id",
      "op": "eq",
      "type": "integer",
      "storageType": "integer",
      "relation": null
    }
  ]
};
module.exports.validator = validator;
