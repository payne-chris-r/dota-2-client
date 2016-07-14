'use strict';

const app = require('../app.js');
const profileListingTemplate = require('../templates/profile-listing.handlebars');

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

const refreshProfileFailure = (data) => {
  console.log('couldn\'t refresh profile');
  console.log(data);
};

const displayProfiles = function(profiles){
  $('#game-history').html(profileListingTemplate(profiles));
};

const getProfileSuccess = (data) => {
  console.log('inside getProfile BEFORE IF app.user is ', app.user);
  if(data.profiles.length === 1){
    console.log('inside getProfile app.user is ', app.user);
    app.user.profile = data.profiles[0];
    $('#game-history').append("HEYYYY");
    displayProfiles(app);
  }
  else if(data.profiles.length === 0){
    console.log('User hasn\'t set up a profile yet.');
  }
  else{
    console.error('User has more than one profile.');
  }
};

const createProfilesSuccess = (data) => {
  console.log('createProfilesSuccess Data is ', data);
  app.profile = data.profile;
  // let allProfiles = "";
  $('#game-history').append("HEYYYY");
  $('#game-history').append(data.profile);
  displayProfiles(app);
  console.log('app.user is ', app.user);
};

const updateProfilesSuccess = function(){

};


module.exports = {
  success,
  failure,
  displayProfiles,
  getProfileSuccess,
  createProfilesSuccess,
  updateProfilesSuccess,
};
