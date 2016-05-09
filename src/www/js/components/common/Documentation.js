import React from 'react';

var Documentation = React.createClass({
  render: function() {
    return (
      <div className="documentation-wrapper">
        {this.props.children}
      </div>
    );
  }
});

Documentation.Header = React.createClass({
  render: function() {
    return (
      <h3>{this.props.children}</h3>
    );
  }
});

Documentation.PlainText = React.createClass({
  render: function() {
    return (
      <p>{this.props.children}</p>
    );
  }
});

Documentation.CodeBlock = React.createClass({
  render: function() {
    return (
      <pre><code>{this.props.children}</code></pre>
    );
  }
});

export default Documentation;
