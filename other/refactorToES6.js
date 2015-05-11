/**
 * Refactoring React Components to ES6 Classes
 *
 * Link: http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
 */


/** 1. Extract `propTypes` and `getDefaultTypes` to properties on the component constructor */

// Before
var ExampleContent = React.createClass({
    propTypes: {
        aStringProp: React.propTypes.string
    },
    getDefaultProps: function () {
        return {
            aStringProp: ''
        };
    }
});

// After (in ES6)
// class definitions in ES6 only allow you to define methods and not properties.

var ExampleContent = React.createClass({
    // ...
});

ExampleContent.propTypes = {
    aStringProp: React.PropTypes.string
};

ExampleContent.defaultProps = {
    aStringProp: ''
};

/** 2. Convert component from using `createClass` to being an ES6 Class */

// Before

var ExampleComponent = React.createClass({
    render: function () {
        return <div onClick={this._handleClick}> Hello, World</div>;
    },

    _handleClick() {
        console.log(this);
    }
});

// After (In ES6)

class ExampleComponent extends React {
    // Methods do not require a `function` keyword and no commas are needed to separate them.
    render() {
        return <div onClick={this._handleClick}> Hello, World</div>;
    }

    _handleClick() {
        console.log(this);
    }
}

/** 3. Bind instance methods/callbacks to the instance */

// One of the niceties provided by React's `createClass` functionality was that it automatically bound your methods to a component instance.
// For example, this meant that within a click callback `this` would be bound to the component.


// Before

class ExampleContent extends React.Component {
    render() {
        return <div onClick={this._handleClick}>Hello, World</div>;
    }

    _handleClick() {
        console.log(this);  // this is undefined
    }
}


// With the move to ES6 classes, we must handle `this` binding ourselves.
// The React team recommends prebinding in the constructor.

// After (ES6)

class ExampleComponent extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return <div onClick={this._handleClick}>Hello, World</div>;
    }

    _handleClick() {
        console.log(this);  // `this` is an ExampleComponent now (context)
    }
}

/** 4. Move state initialization into the constructor */

// Before

class ExampleContent extends React.Component {
    getInitialState() {
        return Store.getState();
    }

    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }
}

// After (ES6)
//  a more idiomatic way of initializing state was simply to store it in an instance variable setup in the constructor

class ExampleContent extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
        // refactor away your `getInitialState` method by moving its return value to be assigned to the `this.state` instance variable in your class' constructor
        this.state = Store.getState();
    }

    // ,,,
}


/** Bonus: Refactor a base component */

// Before

class ExampleComponent extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
        this._handleFoo = this._handleFoo.bind(this);
    }

    // ...
}

// After
// We've reduced the tedium of binding multiple instance methods to `this` by writing a `_bind` helper method in our `BaseComponent`.
// The `_bind` method uses a couple of awesome ES6 features: `methods` is a rest parameter, and there's an arrow function in the `forEach`.

class BaseComponent extends React.Component {
    _bind(...methods) { // ... is a REST param (ES6)
        methods.forEach((method) => this[method] = this[method].bind(this));
    }
}

class ExampleComponent extends BaseComponent {
    constructor() {
        super();
        this._bind('handleClick', '_handleFoo');
    }

    // ..
}
