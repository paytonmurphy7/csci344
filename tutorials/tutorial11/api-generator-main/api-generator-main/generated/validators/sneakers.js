module.exports = {
  "resource": "Sneaker",
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
  ]
};
