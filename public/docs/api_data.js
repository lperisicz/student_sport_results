define({ "api": [
  {
    "type": "get",
    "url": "/api/players/filter",
    "title": "filter",
    "group": "Player",
    "description": "<p>Public route lists all players</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Player.js",
    "groupTitle": "Player",
    "name": "GetApiPlayersFilter",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/players/filter"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/players/create",
    "title": "create",
    "group": "Player",
    "description": "<p>Public route create a single player</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Players full name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Player.js",
    "groupTitle": "Player",
    "name": "PostApiPlayersCreate",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/players/create"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "login",
    "group": "User",
    "description": "<p>Public route to login user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Users email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/User.js",
    "groupTitle": "User",
    "name": "PostApiUsersLogin",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/users/login"
      }
    ]
  }
] });
