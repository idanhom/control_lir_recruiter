// ==UserScript==
// @name         LinkedIn Recruiter Enhanced Navigation
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Use keyboard to navigate and interact with profiles in LinkedIn Recruiter
// @author       Oscar
// @grant        none
// @match        https://www.linkedin.com/talent/hire/*
// ==/UserScript==

(function() {
    'use strict';

    // Function to simulate button click
    function clickButton(selector) {
        const button = document.querySelector(selector);
        if (button) {
            button.click();
        }
    }

    // Keyboard event listener
    document.addEventListener('keydown', function(e) {
        // Check if the focus is on an input, textarea, or any element that is contenteditable
        if (document.activeElement && (document.activeElement.tagName.toLowerCase() === 'input' || document.activeElement.tagName.toLowerCase() === 'textarea' || document.activeElement.isContentEditable)) {
            return; // If so, do not execute hotkey actions
        }

        switch (e.key) {
            case 'a': // backwards
                clickButton('a[rel="prev"]');
                break;
            case 's': // forwards
                clickButton('a[rel="next"]');
                break;
            case 'd': // save to pipeline
                clickButton('.save-to-pipeline__button.save-to-pipeline__button--with-trigger');
                break;
            case 'f': // hide
                clickHideButton();
                break;
            case ' ': // send a message
                e.preventDefault();
                clickButton('button[data-live-test-component="message-icon-btn"]');
                break;
        }
    });

    // Specific function to toggle hide/unhide button
    function clickHideButton() {
        var hideButton = document.querySelector('button[data-live-test-component="hide-btn"]');
        var unhideButton = document.querySelector('button[data-live-test-component="unhide-btn"]');

        if (hideButton) {
            hideButton.click();
        } else if (unhideButton) {
            unhideButton.click();
        }
    }

})();
