# Job Listings

Based on the [Frontend Mentor Job listings with filtering](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt) challenge.

As I couldn't make sense of the JavaScript requirements of the project (from neither the written brief nor the designs) I decided to concentrate on the CSS...

## CSS

- `grid` is used for the overall page layout as well as for the job list `ul`.
- `flex` is used throughout.
- Responsive (including the use of `font-size: clamp(...)` for responsive text).
- `:has()` operator is used for the first time to select the parent of any listing that contains the 'featured' tab.
- CSS Nesting is used to group styles. This wreaks havoc on the Chrome Inspector -- No doubt this will soon be fixed. (Also, see **Limited Browser Support**, below).

## HTML

An HTML `template` is used to output the individual jobs.

## Javascript

- ES6 modules
- ES6 (no transpilation to ES5)

## Accessibility

### Keyboard navigation

- All items are navigable via the keyboard.
- There is a 'skip to main content' link at the top of the page. This becomes visible when using keyboard navigation.

### Screen readers

- `ARIA` and `role` attributes are used where required.
- Descriptive labels for each detail of a job listing are visually hidden (but available to screen readers).

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Microsoft Edge
    - Firefox (fails)

## Limited Browser Support

As of 26th July 2023, and according to [caniuse.com/css-has](https://caniuse.com/css-has) and [/caniuse.com/?search=CSS%20nesting](https://caniuse.com/?search=CSS%20nesting) neither the `:has()` operator nor CSS Nesting works with Firefox (although both do with Safari on Mac. However, I haven't tested the latter).

## Other

- The individual job listings are pulled in via a `.json` file.
- A dark mode theme switcher is included.
