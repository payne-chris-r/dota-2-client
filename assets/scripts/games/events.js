'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetAllGames = (event) => {
  event.preventDefault();
  api.getAllGames()
  .done(ui.getGamesSuccess)
  .fail(ui.failure);
};

const onGetGames = (event) => {
  event.preventDefault();
  api.getHistory()
  .done(ui.getGamesSuccess)
  .fail(ui.failure);
};

const onCreateGame = (event) => {
  event.preventDefault();
  console.log(event.target);
  let data = getFormFields(event.target);
  console.log(data);
  let opponentName = $("#getOpponentName").val();
  console.log(opponentName);
  console.log('Yo dude');
  api.createGame(opponentName)
  .done(ui.success)
  .fail(ui.failure);
};

const onDeleteGame = (event) => {
  event.preventDefault();
  let deleteGame = $("#match-ID-to-delete").val();
  console.log(deleteGame);
  console.log('Hello Chris');
  api.deleteGame(deleteGame)
  .done(ui.success)
  .fail(ui.failure);
};

const onUpdateGame = (event) => {
  event.preventDefault();
  let matchIDtoUpdate = $("#patch-ID-to-delete").val();
  let updatedOpponentName = $("#update-opponent-name").val();
  console.log(matchIDtoUpdate);
  console.log(updatedOpponentName);
  api.updateGame(matchIDtoUpdate, updatedOpponentName)
  .done(ui.success)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#get-games').on('submit', onGetGames);
  // $('#get-games').on('submit', function(event){
  //   event.preventDefault();
  //   console.log("inside get games");
  // });
  $('#create-game').on('submit', onCreateGame);
  $('#delete-game').on('submit', onDeleteGame);
  $('#update-game').on('submit', onUpdateGame);
};

module.exports = {
  addHandlers,
};
