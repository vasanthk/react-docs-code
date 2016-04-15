/**
 * Composition
 *
 * Note:
 * Reconciliation is the process by which React updates the DOM with each new render pass.
 */

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <PagePic pagename={this.props.pagename}/>
        <PageLink pagename={this.props.pagename}/>
      </div>
    );
  }
});

var PagePic = React.createClass({
  render: function () {
    return (
      <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'}/>
    );
  }
});

var PageLink = React.createClass({
  render: function () {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
});

ReactDOM.render(
  <Avatar pagename="Engineering"/>,
  document.getElementById('example')
);

/**
 * Dynamic Children
 */

var Dynamic = React.createClass({
  render: function () {
    var results = this.props.results;
    return (
      <ol>
        {results.map(function (result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
    );
  }
});

// WRONG!
var ListItemWrapper = React.createClass({
  render: function () {
    return <li key={this.props.data.id}>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function () {
    return (
      <ul>
        {this.props.results.map(function (result) {
          return <ListItemWrapper data={result}/>;
        })}
      </ul>
    );
  }
});
// Correct :)
var ListItemWrapper = React.createClass({
  render: function () {
    return <li>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function () {
    return (
      <ul>
        {this.props.results.map(function (result) {
          return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});