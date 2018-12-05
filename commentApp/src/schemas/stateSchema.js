export default {
  "definitions": {},
  "type": "object",
  "title": "State",
  "required": [
    "comments",
    "auth"
  ],
  "properties": {
    "comments": {
      "$id": "#/properties/comments",
      "type": "array",
      "title": "Comments",
      "items": {
        "type": "string"
      }
    },
    "auth": {
      "$id": "#/properties/auth",
      "type": "object",
      "title": "Auth",
      "required": [
        "isAuthenticated"
      ],
      "properties": {
        "isAuthenticated": {
          "$id": "#/properties/auth/properties/isAuthenticated",
          "type": "boolean",
          "title": "Is Authenticated",
          "default": false,
          "examples": [
            true
          ]
        }
      }
    }
  }
}