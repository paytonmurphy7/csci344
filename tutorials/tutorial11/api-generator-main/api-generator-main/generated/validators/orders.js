module.exports = {
  "resource": "Order",
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
  ]
};
