/**
 * In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state).
 * When a component's state data changes, the rendered markup will be updated by re-invoking render().
 */

var Timer = React.createClass({
  getInitialState: function () {
    return {secondsElapsed: 0};
  },
  tick: function () {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  render: function () {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

ReactDOM.render(<Timer />, document.getElementById('example'));