// ==UserScript==
// @name         Temp mod file
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  removes inline styles, rearrange DOM
// @author       You
// @match        https://mammudeck.com/*
// @grant        none
// ==/UserScript==

window.onload = () => {

  'use strict';

  // This snippet will remove all inline styles initially
  document.querySelectorAll('*').forEach(el => {el.removeAttribute('style')});


};

