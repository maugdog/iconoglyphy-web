import React from 'react'

var Instructions = React.createClass({
  render: function() {
    return (
      <div className="instructions-wrapper container">
        <div className="row">
          <div className="col-xs-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

Instructions.Header = React.createClass({
  render: function() {
    return (
      <h3>{this.props.children}</h3>
    );
  }
});

Instructions.PlainText = React.createClass({
  render: function() {
    return (
      <p>{this.props.children}</p>
    );
  }
});

Instructions.CodeBlock = React.createClass({
  render: function() {
    return (
      <pre><code>{this.props.children}</code></pre>
    );
  }
});

export default Instructions;
