const validator = require("../validators/plant-types.js");

module.exports = {
  "type": "PlantType",
  "tableName": "plant_types",
  "fileBase": "plant-types",
  "path": "/api/plant-types",
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
      "query": {
        "param": "name",
        "op": "contains"
      }
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
      "param": "name",
      "fieldName": "name",
      "op": "contains",
      "type": "string",
      "storageType": "string",
      "relation": null
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
