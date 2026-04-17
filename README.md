# Accessible Profile Card

A small, responsive, and accessible profile card built with semantic HTML, modern CSS, and vanilla JavaScript.

## Files

- `index.html` - semantic structure and required `data-testid` targets
- `styles.css` - responsive and accessible styling
- `javascript/script.js` - live epoch time rendering and avatar update behavior

## Run

1. Open `index.html` in any modern browser.
2. No build step or dependencies are required.

## Required Test IDs Included

- `test-profile-card`
- `test-user-name`
- `test-user-bio`
- `test-user-time`
- `test-user-avatar`
- `test-user-social-links`
- `test-user-hobbies`
- `test-user-dislikes`

Additional test IDs are also included on supporting elements to make automated testing easier.

## Behavior Notes

- `test-user-time` is populated from `Date.now()` and refreshes every 500ms.
- Avatar supports:
  - direct image URL input + apply button
  - local file upload via file input
- Social links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Time uses `aria-live="polite"` for screen-reader updates.

## Accessibility Notes

- Semantic landmarks/tags used: `article`, `header`, `figure`, `nav`, `section`, headings, lists.
- Avatar image includes meaningful `alt` text.
- Keyboard users can tab to all links and controls.
- Visible focus states are provided via `:focus-visible`.
- Color choices were selected for good text contrast (WCAG AA oriented).

## Responsive Notes

- Mobile-first layout stacks content vertically.
- At `min-width: 700px`, layout shifts to avatar/content columns and multi-column sections.
- Text wrapping is handled to reduce overflow for long content.

## Manual Test Checklist

1. Open the page and confirm the following elements exist by `data-testid`:
   - `test-profile-card`, `test-user-name`, `test-user-bio`, `test-user-time`, `test-user-avatar`, `test-user-social-links`, `test-user-hobbies`, `test-user-dislikes`.
2. Confirm `test-user-time` shows a numeric epoch value in milliseconds and updates continuously.
3. Confirm avatar image is visible and has an `alt` attribute.
4. Paste a valid image URL and click Apply URL:
   - Avatar should update.
5. Upload a local image file:
   - Avatar should update.
6. Tab through the page:
   - Focus must be visible on links, inputs, and button.
7. Activate each social link with keyboard:
   - Link opens in a new tab.
8. Resize viewport (mobile/tablet/desktop):
   - Layout remains readable and does not break.

## Optional Browser Console Checks

Run these in DevTools Console:

```js
// Core elements exist
[
  "test-profile-card",
  "test-user-name",
  "test-user-bio",
  "test-user-time",
  "test-user-avatar",
  "test-user-social-links",
  "test-user-hobbies",
  "test-user-dislikes"
].every((id) => !!document.querySelector(`[data-testid="${id}"]`));

// Time looks like epoch ms
const t = Number(document.querySelector('[data-testid="test-user-time"]').textContent);
Number.isFinite(t) && String(Math.trunc(t)).length >= 13;
```

## Assumptions

- This project is intentionally framework-free (HTML/CSS/JS only).
- Testing instructions are provided as manual/console checks because no test runner was requested.
