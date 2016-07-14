'use strict';

const app = require('../app.js');

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: "POST",
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

//this getHistory works using current_user on front end

// const getHistory = () => {
//   return $.ajax({
//     url: app.host + '/matches',
//     method: "GET",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };

//this is getHistory below is the one I made using putting the user_id in url

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
