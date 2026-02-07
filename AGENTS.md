# AGENTS.md

Guidelines for AI coding agents working on this project.

## Project Overview

HTML/CSS landing page project for a rock climbing company (Carved Rock Fitness). Educational project from Pluralsight.

## Tech Stack

- **Frontend**: HTML5, CSS3, Google Fonts (Open Sans)
- **Node.js**: v10.13.0 (see `.nvmrc`)
- **Dev Server**: lite-server
- **Testing**: Mocha, Chai, Cheerio (DOM assertions)
- **Visual Testing**: BackstopJS with Puppeteer

## Directory Structure

```
├── css/main.css       # Main stylesheet
├── index.html         # Landing page
├── img/               # Images and SVGs
├── test/
│   ├── unit/          # Mocha unit tests (module1-5.test.js)
│   └── visual/        # BackstopJS configs (module1-5.json)
├── backstop_data/     # Visual regression reference images
└── Dockerfile         # Container config (Ubuntu + nvm)
```

## Setup

```bash
npm install
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server (lite-server) |
| `npm test` | Run all unit tests |
| `npm run test:module1` | Run module 1 tests (replace 1-5) |
| `npm run visual:modules` | Run all visual tests |
| `npm run visual:module1` | Run module 1 visual tests (replace 1-5) |

## Testing

- Unit tests validate CSS classes exist in `main.css` and are applied correctly in `index.html`
- Tests use Cheerio for DOM parsing and postcss for CSS parsing
- Visual tests use BackstopJS with Puppeteer for screenshot comparison
- All test scripts include `|| true` to prevent non-zero exit codes

## Key Files to Edit

- `css/main.css` - Add CSS utility classes
- `index.html` - Apply CSS classes to HTML elements

## Code Style

- CSS uses utility class pattern (`.container`, `.flex`, `.btn`, etc.)
- Base styles use `box-sizing: border-box`
- No build/transpilation step for CSS

## Dependencies

Key dev dependencies:
- `backstopjs@^3.8.2` - Visual regression testing
- `lite-server@^2.4.0` - Dev server with live reload
- `puppeteer` - Used by BackstopJS (currently v1.20.0)

## Environment

- Container runs as `psprojects` user (not root)
- Uses nvm for Node version management
- Environment variable: `NODE_ENV=test` set during test runs
