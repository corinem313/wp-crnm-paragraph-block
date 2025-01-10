# Custom Paragraph Tooltip Block

**Version:** 1.0.0  
**Author:** CORINEM LLC
**License:** GPL-2.0-or-later  
**Requires WordPress:** 5.8+  
**Requires PHP:** 7.4+  

---

## Description

The **Custom Paragraph Tooltip Block** plugin extends the default Paragraph block in Gutenberg to allow adding tooltips to text within the block. This feature enables users to enhance their content by providing additional contextual information in a tooltip format, improving user experience and accessibility.

The tooltips are displayed dynamically when users hover over the text, and they can be easily added, edited, or removed directly in the Gutenberg editor using a toolbar button.

---

## Features

- Add tooltips to selected text within a Paragraph block.
- Edit existing tooltips dynamically through the editor.
- Remove tooltips without affecting the text or other formats (e.g., bold, italic).
- Fully compatible with WordPress's Gutenberg editor.

---

## Installation

1. Download or clone this repository into your WordPress installation's `wp-content/plugins/` directory.
2. Ensure the plugin folder is named `wp-crnm-paragraph-block`.
3. Activate the plugin through the WordPress admin dashboard under **Plugins > Installed Plugins**.
4. You're ready to use the tooltip functionality in your Gutenberg editor.

---

## Usage

1. Open any post or page in the Gutenberg editor.
2. Add or edit a Paragraph block.
3. Highlight the text where you want to add a tooltip.
4. Use the "Tooltip" button in the block toolbar.
5. Enter the tooltip text in the popover, and click **Apply**.
6. To remove a tooltip, click the button again and select **Remove**.

---

## How It Works

- Tooltips are saved as part of the block's content using custom attributes (`aria-describedby` and `data-tooltip-text`).
- On the frontend, the tooltip text is displayed on hover using CSS.
- This plugin doesn't interfere with other formats or customizations applied to the text.

---

## Modifying the Plugin

If you wish to extend or modify the plugin, follow these steps:

### Prerequisites

- Ensure you have Node.js (LTS version) installed on your system.
- Install the dependencies by running `npm install` in the plugin directory.

### Development Workflow

1. **Edit Source Code**: Modify the JavaScript files located in the `src/` directory.
   - The primary file is `src/index.js`.
   - Adjust the toolbar button behavior, format attributes, or editor interaction logic as needed.

2. **Build the Plugin**: After making changes, run the following command to compile the JavaScript files:
   ```bash
   npm run build
