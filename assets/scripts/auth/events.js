'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onGetHistory = (event) => {
  event.preventDefault();
  api.getHistory()
  .done(ui.getGamesSuccess)
  .fail(ui.failure);
};

const onCreateMatch = (event) => {
  event.preventDefault();
  let opponentName = $("#getOpponentName").val();
  console.log(opponentName);
  console.log('matt is awesome');
  api.createMatch(opponentName)
  .done(ui.success)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#opponent-name').on('submit', onGetHistory);
  $('#create-match').on('submit', onCreateMatch);
};
//
module.exports = {
  addHandlers,
};
