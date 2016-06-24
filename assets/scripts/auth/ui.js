'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

const getGamesSuccess = (data) => {
  app.matches = data.matches;
  console.log(data);
  let matchHistory = "";
  for (let i = 0; i < app.matches.length; i++)
    {
      matchHistory = matchHistory + app.matches[i].opponent;
    }
  $("#game-history").text(matchHistory);

};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  getGamesSuccess,
};
