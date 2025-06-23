# user-scripts

# Userscripts Collection

A collection of userscripts to enhance web browsing experience by removing paywalls, improving functionality, and customizing website behavior.

## Intent of the Repository

This repository contains various userscripts designed to:
- Remove annoying paywalls and subscription walls
- Improve website usability and functionality
- Customize web page behavior for a better user experience
- Provide open-source solutions for common web browsing frustrations

All scripts are provided as-is for educational and personal use. Feel free to use, modify, or distribute them as needed.

## How to Add a Script to Violent Monkey

### Installing Violent Monkey
1. Install the Violent Monkey browser extension:
   - **Chrome/Edge**: [Chrome Web Store](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
   - **Firefox**: [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
   - **Safari**: Available on the App Store

### Adding a Userscript
1. Click the Violent Monkey extension icon in your browser toolbar
2. Select **"Open Dashboard"**
3. Click the **"+"** button to create a new script
4. Delete the default template code
5. Copy and paste the desired userscript from this repository
6. Press **Ctrl+S** (or Cmd+S on Mac) to save
7. The script will automatically activate on matching websites

### Alternative Method
1. Click on any `.user.js` file in this repository
2. Click the **"Raw"** button to view the raw script
3. If Violent Monkey is installed, it should automatically detect and offer to install the script
4. Click **"Install"** in the popup that appears

## List of Scripts

### CNN Paywall Remover
**File**: `cnn-paywall-remover.user.js`

**Description**: Removes CNN's subscription paywall and makes the overlay transparent, allowing free access to articles.

**Features**:
- Removes paywall modal completely
- Makes overlay transparent
- Restores page scrolling
- Handles dynamically loaded content
- Works on both cnn.com and www.cnn.com

**Usage**: Simply visit any CNN article - the paywall will be automatically removed.

---

## Contributing

Feel free to contribute additional userscripts or improvements to existing ones. Please ensure scripts are:
- Well-commented
- Include proper metadata headers
- Target specific, useful functionality
- Don't violate website terms of service in harmful ways

## License

This project is licensed under the Unlicense License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

These userscripts are provided for educational and personal use only. Users are responsible for complying with website terms of service and applicable laws. The repository maintainer is not responsible for any misuse of these scripts.
