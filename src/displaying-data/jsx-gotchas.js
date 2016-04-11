// You can insert HTML entities within literal text in JSX:
<div>First &middot; Second</div>

// Bad: It displays "First &middot; Second"
<div>{'First &middot; Second'}</div>

// Unicode characters directly in JavaScript
<div>{'First · Second'}</div>

// Web Accessibility attributes starting with aria- will be rendered properly.
<div aria-hidden={true} />