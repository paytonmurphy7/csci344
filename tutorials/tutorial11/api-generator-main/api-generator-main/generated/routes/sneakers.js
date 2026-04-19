const validator = require("../validators/sneakers.js");

module.exports = {
  "type": "Sneaker",
  "tableName": "sneakers",
  "fileBase": "sneakers",
  "path": "/api/sneakers",
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
      "name": "brand",
      "type": "Brand",
      "storageType": "integer",
      "required": false,
      "relation": {
        "resourceType": "Brand",
        "targetField": "id"
      },
      "query": {
        "param": "brand",
        "op": "eq"
      }
    },
    {
      "name": "price",
      "type": "number",
      "storageType": "number",
      "required": true,
      "relation": null,
      "query": {
        "param": "price",
        "op": "eq"
      }
    },
    {
      "name": "photo",
      "type": "image_url",
      "storageType": "image_url",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "size",
      "type": "integer",
      "storageType": "integer",
      "required": false,
      "relation": null,
      "query": {
        "param": "size",
        "op": "eq"
      }
    },
    {
      "name": "is_available",
      "type": "boolean",
      "storageType": "boolean",
      "required": false,
      "relation": null,
      "query": {
        "param": "is_available",
        "op": "eq"
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
      "param": "brand",
      "fieldName": "brand",
      "op": "eq",
      "type": "Brand",
      "storageType": "integer",
      "relation": {
        "resourceType": "Brand",
        "targetField": "id"
      }
    },
    {
      "param": "price",
      "fieldName": "price",
      "op": "eq",
      "type": "number",
      "storageType": "number",
      "relation": null
    },
    {
      "param": "size",
      "fieldName": "size",
      "op": "eq",
      "type": "integer",
      "storageType": "integer",
      "relation": null
    },
    {
      "param": "is_available",
      "fieldName": "is_available",
      "op": "eq",
      "type": "boolean",
      "storageType": "boolean",
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
