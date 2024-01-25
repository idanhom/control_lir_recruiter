todo:
  kika så när jag inte har uppe själva "fönstret med kandidaten" utan det är mer överskådligt, kunna markera rätt element och styra att lägga till till pipe, gömma, öppna tidigare erfarenhet/utildning.
  sedan scrolla till nästa, och då kunna göra samma sak.
  när jag markerar dem, lägga en liten grå notering så det är tydligt att dessa är markerade.


# LinkedIn Recruiter Enhanced Navigation UserScript

## Description

This UserScript enhances the navigation and interaction experience on LinkedIn Recruiter. It allows users to use keyboard shortcuts for various actions such as navigating between profiles, expanding sections, scrolling through profiles, and more, thus streamlining the recruitment process.

## Features

- **Profile Navigation**: Navigate forwards and backwards between profiles.
- **Profile Scrolling**: Scroll up and down within the profile view.
- **Expand Skills**: Show all skills of a candidate with a single key press.
- **Expand Work Experiences**: Reveal more work experiences of a candidate.
- **Hide/Unhide Profiles**: Toggle the visibility of profiles.
- **Toggle See More/Less**: Expand or collapse extended text sections.
- **Message Candidates**: Quickly access the message button to communicate with candidates.
- **Save to Pipeline**: Easily add candidates to your recruitment pipeline.

## Installation

1. Install a UserScript manager extension in your browser, such as Tampermonkey or Greasemonkey.
2. Create a new script in the UserScript manager.
3. Copy and paste the entire code of this script into the new script section in the UserScript manager.
4. Save the script.

## Usage

Once the script is installed and active, navigate to LinkedIn Recruiter. The script will automatically run on the LinkedIn Recruiter pages (`https://www.linkedin.com/talent/hire/*`). Use the following keyboard shortcuts to interact with the page:

- `a` or `j`: Navigate to the previous profile.
- `s` or `k`: Navigate to the next profile.
- `d` or `l`: Save the current profile to the pipeline.
- `f` or `ö`: Hide or unhide the current profile.
- `Spacebar`: Send a message to the candidate.
- `v` or `m`: Scroll down the profile.
- `c` or `n`: Scroll up the profile.
- `g` or `ä`: Toggle "See More" and "See Less" in text sections.
- `r`: Expand all skills and show more work experiences.

## Notes

- The script will not activate if the focus is on an input, textarea, or any element that is contenteditable.
- LinkedIn's website structure can change, which might affect the functionality of this script. If LinkedIn updates its site, the script may require adjustments.

## License

This script is provided "as is", without warranty of any kind. Use at your own risk.

