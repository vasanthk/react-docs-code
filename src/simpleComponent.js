/**
 * React components implement a render() method that takes input data and returns what to display.
 * This example uses an XML-like syntax called JSX. Input data that is passed into the component can be
 * accessed by render() via this.props.
 *
 */

var HelloMessage = React.createClass({
  render: function () {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloMessage name="John"/>, document.getElementById('example'));