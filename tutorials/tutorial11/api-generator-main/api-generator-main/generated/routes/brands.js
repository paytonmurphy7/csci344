const validator = require("../validators/brands.js");

module.exports = {
  "type": "Brand",
  "tableName": "brands",
  "fileBase": "brands",
  "path": "/api/brands",
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
      "name": "name",
      "type": "string",
      "storageType": "string",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "description",
      "type": "text",
      "storageType": "text",
      "required": false,
      "relation": null,
      "query": null
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
