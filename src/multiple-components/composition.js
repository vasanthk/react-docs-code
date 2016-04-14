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