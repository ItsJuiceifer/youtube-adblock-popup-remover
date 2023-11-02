// Author: Juiceifer
// Created: 11/2/2023
(function() {
    'use strict';

    // Specify the tag names of the elements you want to remove
    var tagNameToRemove1 = 'tp-yt-iron-overlay-backdrop';
    var tagNameToRemove2 = 'tp-yt-paper-dialog';

    // Function to remove elements by their tag names
    function removeElementsByTagName(tagName) {
        var elementsToRemove = document.getElementsByTagName(tagName);
        for (var i = elementsToRemove.length - 1; i >= 0; i--) {
            elementsToRemove[i].remove();
        }
    }

    // Add a 5-second delay before removing elements
    setTimeout(function() {
        removeElementsByTagName(tagNameToRemove1);
        removeElementsByTagName(tagNameToRemove2);
    }, 2000); // 3000 milliseconds = 5 seconds
    setTimeout(function() {
        removeElementsByTagName(tagNameToRemove1);
        removeElementsByTagName(tagNameToRemove2);
    }, 5000); // 3000 milliseconds = 5 seconds
})();
