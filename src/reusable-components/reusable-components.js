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