// JSX spread attributes.

var component = <Component foo={x} bar={y} />;
var component = <Component />;
component.props.foo = x; // bad
component.props.bar = y; // also bad


// Enter, spread attributes.

var props = {};
props.foo = x;
props.bar = y;
var component = <Component {...props} />;

// Gotcha:
// You can use this multiple times or combine it with other attributes.
// The specification order is important. Later attributes override previous ones.

var props = { foo: 'default' };
var component = <Component {...props} foo={'override'} />;
console.log(component.props.foo); // 'override'