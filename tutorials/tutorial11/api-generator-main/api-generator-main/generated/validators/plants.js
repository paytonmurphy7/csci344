module.exports = {
  "resource": "Plant",
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
  ]
};
