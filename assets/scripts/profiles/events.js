'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const camelizer = require('../../../lib/camelizer');
const app = require('../app.js');

const api = require('./api');
const ui = require('./ui');

const onGetAllProfiles = (event) => {
  event.preventDefault();
  api.getAllProfiles()
  .done(ui.getProfilesSuccess)
  .fail(ui.failure);
};

const onGetProfile = (event) => {
  if(event){
    event.preventDefault();
  }
  api.getProfile()
  .done(ui.getProfileSuccess)
  .fail(ui.failure);
};

const onCreateProfile = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  if(app.api === 'express'){
    data = camelizer(data);
  }
  console.log(data);
  api.createProfile(data)
  .done(ui.createProfilesSuccess)
  .fail(ui.failure);
};

const onUpdateProfile = (event) => {
  event.preventDefault();
  //check if profile is loaded in memory
  if(app.user){
    let data = getFormFields(event.target);
    // console.log(data);
    if(app.api === 'express'){
      data = camelizer(data);
    }
    // console.log(data);
    api.updateProfile(data)
    .done(ui.updateProfilesSuccess)
    .fail(ui.failure);
  }
  else
  {
    console.log('who is \'a user\'?');
  }
};

const onDeleteProfile = (event) => {

};


const addHandlers = () => {
  $('#get-all-profiles').on('submit', onGetAllProfiles);
  $('#get-profile').on('submit', onGetProfile);
  $('#create-profile').on('submit', onCreateProfile);
  $('#delete-profile').on('submit', onDeleteProfile);
  $('#update-profile').on('submit', onUpdateProfile);
};

module.exports = {
  addHandlers,
};
