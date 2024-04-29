// ==UserScript==
// @name         LinkedIn Recruiter Enhanced Navigation
// @namespace    http://tampermonkey.net/
// @version      1..8
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

    // Function to navigate forwards
    function navigateForwards() {
        clickButton('a[rel="next"]');
    }

    // Function to scroll down the profile container by a fixed amount
    function scrollDownProfile() {
        const scrollAmount = 300;
        const profileContainer = document.querySelector('#title-pagination-header-text > div > div.profile.profile-slidein__profile > div.profile__main-container');
        if (profileContainer) {
            profileContainer.scrollBy(0, scrollAmount);
        }
    }

    // Function to scroll up the profile container by a fixed amount
    function scrollUpProfile() {
        const scrollAmount = 300;
        const profileContainer = document.querySelector('#title-pagination-header-text > div > div.profile.profile-slidein__profile > div.profile__main-container');
        if (profileContainer) {
            profileContainer.scrollBy(0, -scrollAmount);
        }
    }

    // Function to expand all skills
    function expandAllSkills() {
        const skillButtonSelector = '.expandable-list__button[aria-label^="Show all"]';
        const skillButton = document.querySelector(skillButtonSelector);

        if (skillButton) {
            skillButton.click();
        }
    }

    // Function to expand work experiences
    function expandWorkExperiences() {
        const expandMoreButton = document.querySelector('button[aria-label="See more positions"]');

        if (expandMoreButton) {
            expandMoreButton.click();
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

    // Function to toggle "See More" and "See Less"
    function toggleSeeMoreLess() {
        const seeMoreButton = document.getElementById('line-clamp-show-more-button');
        const seeLessButton = document.getElementById('line-clamp-show-less-button');

        if (seeMoreButton && window.getComputedStyle(seeMoreButton).display !== 'none') {
            seeMoreButton.click();
        } else if (seeLessButton && window.getComputedStyle(seeLessButton).display !== 'none') {
            seeLessButton.click();
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
            case 'j': // Navigate backwards (right hand)
                clickButton('a[rel="prev"]');
                break;
            case 's': // Navigate forwards
            case 'k': // Navigate forwards (right hand)
                navigateForwards();
                break;
            case 'd': // Save to pipeline
            case 'l': // Save to pipeline (right hand)
                clickButton('.save-to-pipeline__button.save-to-pipeline__button--with-trigger');
                break;
            case 'f': // Hide/Unhide profile
            case 'ö': // Hide/Unhide profile (right hand)
                clickHideButton();
                break;
            case ' ': // Send a message
                e.preventDefault();
                clickButton('button[data-live-test-component="message-icon-btn"]');
                break;
            case 'v': // Scroll down the profile
            case 'm': // Scroll down the profile (right hand)
                e.preventDefault();
                scrollDownProfile();
                break;
            case 'c': // Scroll up the profile
            case 'n': // Scroll up the profile (right hand)
                e.preventDefault();
                scrollUpProfile();
                break;
            case 'g': // Toggle "See More" and "See Less"
            case 'ä': // Toggle "See More" and "See Less" (right hand)
                e.preventDefault();
                toggleSeeMoreLess();
                break;
            case 'r': // Expand all skills and work experiences
                e.preventDefault();
                expandAllSkills();
                break;
            case 'e': // Expand work experiences
                e.preventDefault();
                expandWorkExperiences();
                break;
        }
    });

    // Mouse event listener for handling mouse button presses
    document.addEventListener('mouseup', function(e) {
        if (e.button === 4) { // Mouse button 5
            navigateForwards();
        }
    });

})();
