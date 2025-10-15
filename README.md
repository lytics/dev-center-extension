# Lytics Developer Tools v2

<!-- ![Lytics Developer Tools Logo](https://example.com/lytics-developer-tools-logo.png) -->

Lytics Developer Tools is a Chrome extension designed to empower developers, marketers, and data analysts by providing powerful capabilities to test, debug, and maximize the potential of the Lytics personalization engine. With this extension, you can gain insights into your Lytics installation, access visitor profiles, and manage personalization experiences effortlessly.

## Features

### 1. Lytics Installation Status
- Check the overall health and status of your Lytics installation.
- Verify if your Lytics instance is up-to-date and running smoothly.

### 2. Collecting Activity Logging & Debugging
- Check the overall health and status of your Lytics installation.
- Verify if your Lytics instance is up-to-date and running smoothly.

### 3. Visitor Profile Overview
- Gain full access to the Lytics profile for the current visitor.
- Explore key insights and all available attributes of individual visitors.
- Use this feature to better understand your audience and tailor experiences accordingly.

### 4. Personalization Experience Overview
- Get an overview of existing personalization experiences within Lytics.
- Access a summary of each available experience and its corresponding configuration.
- Streamline the management of personalization strategies for your content.

## Installation

1. Go to the [Chrome Web Store](https://chromewebstore.google.com/detail/lytics-dev-tools/jhdkpndomcenhmbkcnfjmdccfmlmjfgl) page for Lytics Developer Tools.
2. Click the "Add to Chrome" button to install the extension.

### Manual Installation

1. Download the extension package ZIP file from our [GitHub releases](https://github.com/lytics/dev-center-extension/releases) page.
   - Select the most current release (hint, it will be at the top). 
2. Extract the contents of the ZIP file to a local directory.
3. Open Chrome and navigate to [chrome://extensions/](chrome://extensions/).
4. Enable the "Developer mode" toggle at the top-right corner of the page.
5. Click the "Load unpacked" button and select the folder that you unzipped in step 1 (hint, it will be named something like dev-center-extension-0.0.0).
6. Lytics Developer Tools will be added to your Chrome extensions.
7. Pin the extension to your top bar using the little "pin" icon.
8. Navigate to a page with Lytics or refresh.
9. Open the extension and enable or disable at the top right corner.

## Development

### Prerequisites

This project uses [Volta](https://volta.sh/) to ensure consistent Node.js and Yarn versions across all developers and CI/CD environments.

**Install Volta:**
```bash
curl https://get.volta.sh | bash
```

After installation, Volta will automatically use the correct Node.js (20.19.0) and Yarn (1.22.19) versions when you enter this project directory. No manual version switching needed!

> **Note**: If you don't have Volta installed, you can still use the project, but you'll need to manually ensure you're using Node.js 20.19.0 and Yarn 1.22.19.

### Quick Start
1. Clone the repository: `git clone https://github.com/lytics/dev-center-extension.git`
2. Navigate to the project: `cd dev-center-extension` (Volta will auto-switch versions)
3. Install dependencies: `yarn install`
4. Build the extension: `yarn build`
5. Start development server: `yarn dev`
6. Load the `dist` directory in Chrome as unpacked extension

### Development Standards
This project is transitioning from v1 to v2 with strict code quality standards:

- **New Code**: Must follow v2 patterns (see `CLAUDE.md` and `DEVELOPMENT.md`)
- **Architecture**: React 18, TypeScript, Material-UI v5, functional components
- **Styling**: Styled components with theme integration
- **Content**: Centralized text management
- **Testing**: Vitest and React Testing Library

### Documentation
- **`AGENTS.md`** - AI coding agent instructions (follows [agents.md](https://agents.md/) standard)
- **`DEVELOPMENT.md`** - Comprehensive development guide for humans
- **Reference Components**: `DisabledState.tsx`, `EnabledState.tsx` for v2 patterns

### AI Tool Compatibility
This project uses the industry-standard `AGENTS.md` format, compatible with 20+ AI coding tools including Cursor, GitHub Copilot, Aider, and more.

## Feedback and Issues

If you have any questions, encounter issues, or have ideas for improvements, please [submit an issue](https://github.com/lytics/dev-center-extension/issues).

## License

Lytics Developer Tools is licensed under the [MIT License](https://github.com/lytics/dev-center-extension/blob/main/LICENSE).