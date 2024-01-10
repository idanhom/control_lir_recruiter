// ==UserScript==
// @name         LinkedIn Recruiter Enhanced Navigation
// @namespace    http://tampermonkey.net/
// @version      1.4
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

    // Function to scroll down the profile container by a fixed amount
    function scrollDownProfile() {
        const scrollAmount = 500; // Amount of pixels to scroll down
        const profileContainer = document.querySelector('#title-pagination-header-text > div > div.profile.profile-slidein__profile > div.profile__main-container');
        if (profileContainer) {
            profileContainer.scrollBy(0, scrollAmount);
        }
    }

    // Function to scroll up the profile container by a fixed amount
    function scrollUpProfile() {
        const scrollAmount = 500; // Amount of pixels to scroll up
        const profileContainer = document.querySelector('#title-pagination-header-text > div > div.profile.profile-slidein__profile > div.profile__main-container');
        if (profileContainer) {
            profileContainer.scrollBy(0, -scrollAmount);
        }
    }

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

    // Keyboard event listener for handling key presses
    document.addEventListener('keydown', function(e) {
        // Check if the focus is on an input, textarea, or any element that is contenteditable
        if (document.activeElement && (document.activeElement.tagName.toLowerCase() === 'input' || document.activeElement.tagName.toLowerCase() === 'textarea' || document.activeElement.isContentEditable)) {
            return; // Do not execute hotkey actions if in an editable element
        }

        // Handle different key presses
        switch (e.key) {
            case 'a': // Navigate backwards
                clickButton('a[rel="prev"]');
                break;
            case 's': // Navigate forwards
                clickButton('a[rel="next"]');
                break;
            case 'd': // Save to pipeline
                clickButton('.save-to-pipeline__button.save-to-pipeline__button--with-trigger');
                break;
            case 'f': // Hide/Unhide profile
                clickHideButton();
                break;
            case ' ': // Send a message
                e.preventDefault();
                clickButton('button[data-live-test-component="message-icon-btn"]');
                break;
            case 'v': // Scroll down the profile
                e.preventDefault();
                scrollDownProfile();
                break;
            case 'c': // Scroll up the profile
                e.preventDefault();
                scrollUpProfile();
                break;
        }
    });

})();
