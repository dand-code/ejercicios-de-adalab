'use strict';

const alertBox = document.querySelector('#cookie');

const hiddenBox;
hiddenBox = alertBox.classList.add('hidden');

const closeAlertBox = document.querySelector('#cookie-icon');

closeAlertBox.addEventListener('click', hiddenBox);