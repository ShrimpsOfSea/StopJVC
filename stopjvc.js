// ==UserScript==
// @name         Bloquer jeuxvideo.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bloque l'accès à jeuxvideo.com
// @author       Toi
// @match        *://www.jeuxvideo.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // Redirige vers une autre page
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Change cette URL si nécessaire si tu veux autre chose :hap:
})();
