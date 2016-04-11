// You can insert HTML entities within literal text in JSX:
<div>First &middot; Second</div>

// Bad: It displays "First &middot; Second"
<div>{'First &middot; Second'}</div>

// Unicode characters directly in JavaScript
<div>{'First · Second'}</div>

// A safer alternative is to find the unicode number corresponding to the entity
// and use it inside of a JavaScript string.

<div>{'First \u00b7 Second'}</div>
<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>

// You can use mixed arrays with strings and JSX elements.
<div>{['First ', <span>&middot;</span>, ' Second']}</div>

// Web Accessibility attributes starting with aria- will be rendered properly.
<div aria-hidden={true} />