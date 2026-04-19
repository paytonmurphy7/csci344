module.exports = {
  "resource": "Comment",
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
  ]
};
