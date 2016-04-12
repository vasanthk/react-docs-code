/**
 * Dynamic UI
 *
 * What Should Go in State?
 * - State should contain data that a component's event handlers may change to trigger a UI update.
 *
 * What Shouldn't Go in State?
 * - Computed data
 * - React components
 * - Duplicated data from props
 *
 */


var LikeButton = React.createClass({
  getInitialState: function () {
    return {liked: false};
  },
  handleClick: function (event) {
    this.setState({
      liked: !this.state.liked
    });
  },
  render: function () {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);