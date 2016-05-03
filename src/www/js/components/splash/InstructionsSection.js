import React from 'react'

var codeBlock = '<head>\
	<!-- your other code -->\
\
	<link rel="stylesheet" type="text/css" href="link-to-css-file">\
	\
	<!-- your other code -->\
</head>';

export default React.createClass({
  render: function() {
    return (
      <div className="instructions-section container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Instructions</h3>

            <p>Simply link to the hosted style sheet like so:</p>


              <code>
                {codeBlock}
              </code>


            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
