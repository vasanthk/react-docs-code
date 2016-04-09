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