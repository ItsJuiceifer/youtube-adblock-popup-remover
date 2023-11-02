// Author: Juiceifer
// Created: 11/2/2023
(function() {
    'use strict';
    var tagNameToRemove1 = 'tp-yt-iron-overlay-backdrop';
    var tagNameToRemove2 = 'tp-yt-paper-dialog';

    function removeElementsByTagName(tagName) {
        var elementsToRemove = document.getElementsByTagName(tagName);
        for (var i = elementsToRemove.length - 1; i >= 0; i--) {
            elementsToRemove[i].remove();
        }
    }

    // Add a delay before removing elements
    setTimeout(function() {
        removeElementsByTagName(tagNameToRemove1);
        removeElementsByTagName(tagNameToRemove2);
    }, 2000); 
    setTimeout(function() {
        removeElementsByTagName(tagNameToRemove1);
        removeElementsByTagName(tagNameToRemove2);
    }, 5000);
})();
