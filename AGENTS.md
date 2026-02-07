# AGENTS.md

Guidelines for AI coding agents working on this project.

## Project Overview

HTML/CSS landing page project for a rock climbing company (Carved Rock Fitness). The project is structured as a modular learning exercise with 5 modules.

## Tech Stack

- HTML5/CSS3
- Node.js (see `.nvmrc` for version)
- lite-server for local development
- Mocha + Chai for unit testing
- BackstopJS for visual regression testing

## Setup

```bash
npm install
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start local dev server (lite-server) |
| `npm test` | Run all unit tests |
| `npm run test:module1` | Run module 1 tests only |
| `npm run test:module2` | Run module 2 tests only |
| `npm run test:module3` | Run module 3 tests only |
| `npm run test:module4` | Run module 4 tests only |
| `npm run test:module5` | Run module 5 tests only |
| `npm run visual:module1` | Run visual tests for module 1 |
| `npm run visual:module2` | Run visual tests for module 2 |
| `npm run visual:module3` | Run visual tests for module 3 |
| `npm run visual:module4` | Run visual tests for module 4 |
| `npm run visual:module5` | Run visual tests for module 5 |

## Project Structure

```
├── css/main.css      # Main stylesheet - all CSS goes here
├── index.html        # Main HTML page
├── img/              # Image assets
├── test/
│   ├── unit/         # Mocha unit tests per module
│   └── visual/       # BackstopJS visual test configs
├── backstop_data/    # Visual regression reference images
├── tasks.md          # Detailed task instructions per module
└── package.json      # Dependencies and scripts
```

## Code Style

### CSS
- Use class selectors (e.g., `.container`, `.btn`)
- Flexbox for layouts
- Utility classes for reusable styles: `.flex`, `.flex-column`, `.align-center`, `.center`, `.space-between`
- Button classes: `.btn`, `.btn-default`, `.btn-primary`
- Text classes: `.text-light`, `.text-secondary`, `.text-primary`
- Use `box-sizing: border-box` (global reset already in place)
- Colors: primary `#364147`, accent `#faa541`, light `#a0a0a0`
- Font: Open Sans

### HTML
- Semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`)
- Use comment blocks to identify sections (e.g., `<!-- NAVIGATION -->`, `<!-- HERO -->`)
- Apply utility classes to elements as needed

## Testing Notes

- Tests use `cheerio` to parse HTML and `postcss` to parse CSS
- Unit tests verify CSS rules and HTML class attributes
- Visual tests compare screenshots against reference images in `backstop_data/bitmaps_reference/`
- Tests use `|| true` suffix so builds don't fail on test failures

## Module Structure

1. **Module 1** - Utility Classes (container, flex, buttons, forms, typography)
2. **Module 2** - Header & Navigation (nav, branding, search, profile)
3. **Module 3** - Hero, Sales Banner, & Categories
4. **Module 4** - Full Banner
5. **Module 5** - Footer

## Key Files to Edit

- `css/main.css` - Add CSS rules
- `index.html` - Apply class attributes to HTML elements

## Dependencies

Key runtime dependencies:
- `cheerio` - HTML parsing for tests
- `postcss` - CSS parsing for tests
- `mocha`/`chai` - Test framework

Dev dependencies:
- `backstopjs` - Visual regression testing
- `lite-server` - Development server
