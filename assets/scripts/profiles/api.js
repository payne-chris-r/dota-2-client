'use strict';

const app = require('../app.js');
//index
const getAllProfiles = () => {
  return $.ajax({
    url: app.host + '/profiles/',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};
//show
const getProfile = () => {
  console.log('app.user id is', app.user._id);
  return $.ajax({
    url: app.host + `/profiles?u=${app.user._id}`,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};
//create
const createProfile = function (data) {
  console.log('data is ', data);
  return $.ajax(
    {
    url: app.host + '/profiles',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

const updateProfile = function (data) {
  console.log('data is ', data);
  console.log('app is ', app);
  return $.ajax(
    {
    url: app.host + '/profiles/' + app.user.profile._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data
  });
};

// {
//   "profile": {
//     "first_name": data.first_name,
//     "last_name": data.last_name,
//     "nationality": data.nationality
//   }
// }

module.exports = {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
};
