/******/ (() => { // webpackBootstrap
/*!***********************************************!*\
  !*** ./resources/js/pages/pass-addon.init.js ***!
  \***********************************************/
/*
Template Name: Laravel E-Commerce Admin Dashboard
Author: Themesdesign
Website: https://themesdesign.in/
Contact: themesdesign.in@gmail.com
File: Password Addon Js File
*/

// show password input value
document.getElementById('password-addon').addEventListener('click', function () {
  var passwordInput = document.getElementById("password-input");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
/******/ })()
;