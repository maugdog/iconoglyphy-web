/*jshint multistr: true */

import React from 'react';
import Documentation from '../common/Documentation';

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
			<div className="container">
        <div className="row">
          <div className="col-xs-12">
						<Documentation>
							<Documentation.Header>Instructions</Documentation.Header>
							<Documentation.PlainText>Simply link to the hosted style sheet like so:</Documentation.PlainText>
							<Documentation.CodeBlock>
								&lt;head&gt;<br/>
									&nbsp;&nbsp;&nbsp;&lt;!-- your other code --&gt;<br/><br/>

									&nbsp;&nbsp;&nbsp;&lt;link rel="stylesheet" type="text/css" href="link-to-css-file"&gt;<br/><br/>

									&nbsp;&nbsp;&nbsp;&lt;!-- your other code --&gt;<br/>
								&lt;/head&gt;
							</Documentation.CodeBlock>

							<Documentation.Header>Usage - Web</Documentation.Header>
							<Documentation.PlainText>For a static icon, use whatever html element you like and apply the iconoglyphy css class:</Documentation.PlainText>
							<Documentation.CodeBlock>
								&lt;!-- render a gear icon --&gt;<br/>
								&lt;i class="ig ig-gear" aria-hidden="true"&gt;&lt;/i&gt;
							</Documentation.CodeBlock>

							<Documentation.Header>Usage - iPhone, Android, Etc.</Documentation.Header>
							<Documentation.PlainText>
								Currently Iconoglyphy can only be used on other platforms by downloading the font and then rendering a
								text element with the desired icon's unicode character set as the string value. The font can be downloaded
								here: <a href="https://d23mmkdgz8do5o.cloudfront.net/src/0.0.1/iconoglyphy-static.otf">Iconoglyphy Open Type Font</a>
							</Documentation.PlainText>

						</Documentation>
					</div>
				</div>
			</div>
    );
  }
});
