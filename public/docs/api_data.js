define({ "api": [
  {
    "type": "delete",
    "url": "/api/events/delete/:id",
    "title": "delete",
    "group": "Event",
    "description": "<p>Public route for deleting event</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Event.js",
    "groupTitle": "Event",
    "name": "DeleteApiEventsDeleteId",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/events/delete/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/events/create",
    "title": "create",
    "group": "Event",
    "description": "<p>Public route create a single event</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "match_id",
            "description": "<p>Id of match for new event</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "team_id",
            "description": "<p>Id of team for new event</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "player_id",
            "description": "<p>Id of player for new event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"goal\"",
              "\"field_goal\"",
              "\"three_point_field_goal\"",
              "\"yellow_card\"",
              "\"red_card\"",
              "\"penalty_kick\"",
              "\"game_end\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of event</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "time",
            "description": "<p>Time of event in milliseconds</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "interval",
            "description": "<p>Interval of event eg. 1 -&gt; First half</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Event.js",
    "groupTitle": "Event",
    "name": "PostApiEventsCreate",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/events/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/faculties/delete/:id",
    "title": "delete",
    "group": "Faculty",
    "description": "<p>Public route for deleting faculty</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Faculty.js",
    "groupTitle": "Faculty",
    "name": "DeleteApiFacultiesDeleteId",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/faculties/delete/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/faculties/filter",
    "title": "filter",
    "group": "Faculty",
    "description": "<p>Public route lists all faculties</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Faculty.js",
    "groupTitle": "Faculty",
    "name": "GetApiFacultiesFilter",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/faculties/filter"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/faculties/create",
    "title": "create",
    "group": "Faculty",
    "description": "<p>Public route create a single faculty</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Faculty full name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>City name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Faculty.js",
    "groupTitle": "Faculty",
    "name": "PostApiFacultiesCreate",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/faculties/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/matches/delete/:id",
    "title": "delete",
    "group": "Match",
    "description": "<p>Public route for deleting match</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Match.js",
    "groupTitle": "Match",
    "name": "DeleteApiMatchesDeleteId",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/matches/delete/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/matches/filter/:sportId",
    "title": "filter",
    "group": "Match",
    "description": "<p>Public route lists all matches for sport</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "sportId",
            "description": "<p>Sport id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Match.js",
    "groupTitle": "Match",
    "name": "GetApiMatchesFilterSportid",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/matches/filter/:sportId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/matches/get/:matchId",
    "title": "get",
    "group": "Match",
    "description": "<p>Public route get single match</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "matchId",
            "description": "<p>Match id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Match.js",
    "groupTitle": "Match",
    "name": "GetApiMatchesGetMatchid",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/matches/get/:matchId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/matches/create",
    "title": "create",
    "group": "Match",
    "description": "<p>Public route create a single match</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Sport id</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "team_one",
            "description": "<p>Team one id</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "team_two",
            "description": "<p>Team two id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>Time of match, format: &quot;2020-12-18 17:04:46&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Match.js",
    "groupTitle": "Match",
    "name": "PostApiMatchesCreate",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/matches/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/players/delete/:id",
    "title": "delete",
    "group": "Player",
    "description": "<p>Public route for deleting player</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Player.js",
    "groupTitle": "Player",
    "name": "DeleteApiPlayersDeleteId",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/players/delete/:id"
      }
    ]
  },
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
    "type": "delete",
    "url": "/api/sports/delete/:id",
    "title": "delete",
    "group": "Sport",
    "description": "<p>Public route for deleting sport</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Sport.js",
    "groupTitle": "Sport",
    "name": "DeleteApiSportsDeleteId",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/sports/delete/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/sports/filter",
    "title": "filter",
    "group": "Sport",
    "description": "<p>Public route lists all sports</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Sport.js",
    "groupTitle": "Sport",
    "name": "GetApiSportsFilter",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/sports/filter"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/sports/create",
    "title": "create",
    "group": "Sport",
    "description": "<p>Public route create a single sport</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Unique sport name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "minPlayers",
            "description": "<p>Min number of players for sport</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Sport.js",
    "groupTitle": "Sport",
    "name": "PostApiSportsCreate",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/sports/create"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/teams/delete/:id",
    "title": "delete",
    "group": "Team",
    "description": "<p>Public route for deleting team</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Team.js",
    "groupTitle": "Team",
    "name": "DeleteApiTeamsDeleteId",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/teams/delete/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/teams/filter",
    "title": "filter",
    "group": "Team",
    "description": "<p>Public route for getting all teams</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Team.js",
    "groupTitle": "Team",
    "name": "GetApiTeamsFilter",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/teams/filter"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/api/teams/remove-player/:playerId",
    "title": "removePlayer",
    "group": "Team",
    "description": "<p>Public route for removing player from team</p>",
    "version": "0.0.0",
    "filename": "app/Routes/Team.js",
    "groupTitle": "Team",
    "name": "PatchApiTeamsRemovePlayerPlayerid",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/teams/remove-player/:playerId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/teams/create",
    "title": "create",
    "group": "Team",
    "description": "<p>Public route create a team</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Team name</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "faculty_id",
            "description": "<p>Faculty id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sport_id",
            "description": "<p>Sport id</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "players",
            "description": "<p>Ids of players to assign in team</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/Routes/Team.js",
    "groupTitle": "Team",
    "name": "PostApiTeamsCreate",
    "sampleRequest": [
      {
        "url": "https://student-sport-results.herokuapp.com/api/teams/create"
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
