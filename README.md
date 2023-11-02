# youtube-adblock-popup-remover

This extension will remove YouTube's crackdown popups that show up because you run adblock.
This is for those who already have an adblock extension installed.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Delay's 2 seconds on loading of the page to remove the pop
- Check's again if popup is still up after 3 seconds it attempts to remove

## Installation

```bash
# Clone the repository
git clone https://github.com/ItsJuiceifer/youtube-adblock-popup-remover.git

# Install Chrome Extension
1. Once you have the files in place, go to the Chrome browser.

2. Open the Chrome menu (three dots) > More tools > Extensions.

3. Enable the "Developer mode" option in the top right corner.

4. Click on the "Load unpacked" button, and select your extension directory.

5. The extension should now be loaded, and the content script will run on YouTube pages, removing elements with a 5-second delay.
