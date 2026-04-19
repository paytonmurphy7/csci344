const validator = require("../validators/comments.js");

module.exports = {
  "type": "Comment",
  "tableName": "comments",
  "fileBase": "comments",
  "path": "/api/comments",
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
      "name": "body",
      "type": "text",
      "storageType": "text",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "plant",
      "type": "Plant",
      "storageType": "integer",
      "required": true,
      "relation": {
        "resourceType": "Plant",
        "targetField": "id"
      },
      "query": {
        "param": "plant",
        "op": "eq"
      }
    }
  ],
  "permissions": {
    "list": "public",
    "retrieve": "public",
    "create": "user",
    "update": "owner",
    "delete": "owner"
  },
  "queryFilters": [
    {
      "param": "plant",
      "fieldName": "plant",
      "op": "eq",
      "type": "Plant",
      "storageType": "integer",
      "relation": {
        "resourceType": "Plant",
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
