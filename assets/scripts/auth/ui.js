'use strict';

const app = require('../app.js');
const profilesApi = require('../profiles/api.js');
const profilesUi = require('../profiles/ui.js');

const refreshProfile = () => {
  profilesApi.getProfile()
  .done(profilesUi.getProfileSuccess)
  .fail(profilesUi.failure);
};

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
  console.log('SIGN IN SUCCESS');
  app.user = data.user;
  //get the profile associated with the user
  refreshProfile();
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
