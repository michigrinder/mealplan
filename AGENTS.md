# Repository Guidelines

## Project Structure & Module Organization
This repository is a small static project with two core files at the root:
- `meal_plan.html`: single-file UI (HTML, CSS, JavaScript) for rendering the weekly meal plan and shopping list.
- `meal_plan_structured.csv`: structured meal input data used as source content.

Keep the project flat unless complexity grows. If new files are added, prefer:
- `assets/` for images/icons
- `scripts/` for data transformation helpers
- `tests/` for future automated checks

## Build, Test, and Development Commands
No build step is required.
- `start meal_plan.html` (PowerShell): open the page in the default browser.
- `python -m http.server 8000` (optional): serve locally, then open `http://localhost:8000/meal_plan.html`.
- `Get-Content meal_plan_structured.csv`: quick CSV validation in terminal.

## Coding Style & Naming Conventions
- Use 2 spaces for HTML/CSS/JS indentation.
- Keep JavaScript logic readable and modular (small helper functions like `getUnit`, `formatAmount`).
- Prefer descriptive camelCase for JS variables/functions (`shoppingRows`, `renderShoppingTable`).
- Keep CSS class names kebab-case and feature-scoped (`day-details`, `shopping-table`).
- Preserve UTF-8 encoding (German umlauts are expected in content).

## Testing Guidelines
There is no automated test framework yet. Use manual validation before submitting changes:
- Page loads without console errors.
- Day sections and shopping list `<details>` toggle correctly.
- Table column alignment remains consistent across meals.
- Unit formatting is correct (`g`, `Stk`, `Portion`, `Scheibe`).
- CSV and embedded data stay in sync if either is edited.

## Commit & Pull Request Guidelines
Git history is not available in this workspace, so use the following standard:
- Commit messages: short, imperative, and scoped.  
  Example: `feat: add collapsible weekly shopping list`
- PRs should include:
  - what changed and why
  - before/after screenshots for UI updates
  - manual test notes (what was checked)
  - any data updates to `meal_plan_structured.csv`

## Security & Configuration Tips
- Do not embed secrets or private data in HTML/CSV.
- Keep external dependencies at zero unless clearly justified.
