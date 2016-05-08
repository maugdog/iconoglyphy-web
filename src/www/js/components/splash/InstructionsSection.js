/*jshint multistr: true */

import React from 'react';
import Instructions from '../common/Instructions';

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
			<Instructions>
				<Instructions.Header>Instructions</Instructions.Header>
				<Instructions.PlainText>Simply link to the hosted style sheet like so:</Instructions.PlainText>
				<Instructions.CodeBlock>
					&lt;head&gt;<br/>
						&nbsp;&nbsp;&nbsp;&lt;!-- your other code --&gt;<br/><br/>

						&nbsp;&nbsp;&nbsp;&lt;link rel="stylesheet" type="text/css" href="link-to-css-file"&gt;<br/><br/>

						&nbsp;&nbsp;&nbsp;&lt;!-- your other code --&gt;<br/>
					&lt;/head&gt;
				</Instructions.CodeBlock>

				<Instructions.Header>Usage</Instructions.Header>
				<Instructions.PlainText>For a static icon, use whatever html element you like and apply the iconoglyphy css class:</Instructions.PlainText>
				<Instructions.CodeBlock>
					&lt;!-- render a gear icon --&gt;<br/>
					&lt;i class="ig ig-gear"&gt;&lt;/i&gt;
				</Instructions.CodeBlock>
			</Instructions>
    );
  }
});
