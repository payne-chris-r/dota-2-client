'use strict';

const app = require('../app.js');

const getAllGames = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getHistory = () => {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


const createGame = function (opponentName) {
  return $.ajax(
  {
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data :{
          "game": {
            "opponent": opponentName
            }
          }
  });
};

const deleteGame = function (deleteGame) {
  return $.ajax(
  {
    url: app.host + '/games/' + deleteGame,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }
  );
};

const updateGame = function (gameIDtoUpdate, updatedOpponentName) {
  return $.ajax(
  {
    url: app.host + '/games/' + gameIDtoUpdate,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data :{
          "game": {
            "opponent": updatedOpponentName
            }
          }
  });
};

module.exports = {
  getHistory,
  createGame,
  deleteGame,
  updateGame
};
