// Single Child

var MyComponent = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function () {
    return (
      <div>
        {this.props.children} // This must be exactly one element or it will warn.
      </div>
    );
  }
});

// Default prop values
var ComponentWithDefaultProps = React.createClass({
  getDefaultProps: function () {
    return {
      value: 'default value'
    };
  }
});