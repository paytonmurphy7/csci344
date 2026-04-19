const validator = require("../validators/orders.js");

module.exports = {
  "type": "Order",
  "tableName": "orders",
  "fileBase": "orders",
  "path": "/api/orders",
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
      "name": "customer_name",
      "type": "string",
      "storageType": "string",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "email",
      "type": "string",
      "storageType": "string",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "status",
      "type": "string",
      "storageType": "string",
      "required": true,
      "relation": null,
      "query": {
        "param": "status",
        "op": "contains"
      }
    },
    {
      "name": "total",
      "type": "number",
      "storageType": "number",
      "required": true,
      "relation": null,
      "query": null
    },
    {
      "name": "created_at",
      "type": "datetime",
      "storageType": "datetime",
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
      "param": "status",
      "fieldName": "status",
      "op": "contains",
      "type": "string",
      "storageType": "string",
      "relation": null
    },
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
