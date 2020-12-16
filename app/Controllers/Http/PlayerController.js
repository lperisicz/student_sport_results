'use strict'

class PlayerController {

  randomNameGenerator (num) {
    let res = '';
    for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
    }
    return res;
  }

  teams = [
    {
      name: this.randomNameGenerator(7),
      city: this.randomNameGenerator(8)
    },
    {
      name: this.randomNameGenerator(7),
      city: this.randomNameGenerator(8)
    }
  ]

  async filter({response}) {

    let players = []
    for(let i = 0; i < 30; i++) {
      players[i] = {
        displayName: this.randomNameGenerator(7) + " " + this.randomNameGenerator(9),
        team: this.teams[i % 2]
      }
    }

    let responseDummyData = {
      data: {
        players: players
      }
    }
    response.send(responseDummyData)
  }

}

module.exports = PlayerController
