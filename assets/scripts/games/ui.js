'use strict';

const app = require('../app.js');

const getGamesSuccess = (data) => {
  app.games = data.games;
  console.log(data);
  let gameHistory = "";
  for (let i = 0; i < app.games.length; i++)
    {
      gameHistory = gameHistory + app.games[i].opponent;
    }
  $("#game-history").text(gameHistory);
};

module.exports = {
  getGamesSuccess,
};
