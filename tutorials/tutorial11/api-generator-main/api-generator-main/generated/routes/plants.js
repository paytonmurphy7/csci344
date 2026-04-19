const validator = require("../validators/plants.js");

module.exports = {
  "type": "Plant",
  "tableName": "plants",
  "fileBase": "plants",
  "path": "/api/plants",
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
      "name": "image_url",
      "type": "image_url",
      "storageType": "image_url",
      "required": true,
      "relation": null,
      "query": {
        "param": "image_url",
        "op": "contains"
      }
    },
    {
      "name": "plant_type",
      "type": "PlantType",
      "storageType": "integer",
      "required": true,
      "relation": {
        "resourceType": "PlantType",
        "targetField": "id"
      },
      "query": {
        "param": "plant_type",
        "op": "eq"
      }
    },
    {
      "name": "planted_year",
      "type": "integer",
      "storageType": "integer",
      "required": false,
      "relation": null,
      "query": null
    },
    {
      "name": "latitude",
      "type": "number",
      "storageType": "number",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "longitude",
      "type": "number",
      "storageType": "number",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "notes",
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
      "param": "image_url",
      "fieldName": "image_url",
      "op": "contains",
      "type": "image_url",
      "storageType": "image_url",
      "relation": null
    },
    {
      "param": "plant_type",
      "fieldName": "plant_type",
      "op": "eq",
      "type": "PlantType",
      "storageType": "integer",
      "relation": {
        "resourceType": "PlantType",
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
