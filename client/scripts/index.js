"use strict";

var $    = require('jquery');
global.$ = global.jQuery = $;
require('semantic-ui/dist/semantic.js');

var React            = require('react/addons');
var GitHubForkRibbon = require('react-github-fork-ribbon');
var Highlight        = require('react-highlight');
var Semantify        = require('react-semantify');

var {Header} = Semantify;

var Index = React.createClass({

  render: function () {
    return (
      <div>

        <GitHubForkRibbon portion="right"
                          href="//github.com/jessy1092/react-github-fork-ribbon"
                          target="_blank">
          Fork me on GitHub
        </GitHubForkRibbon>

        <div className="container">
          <Header className="huge dividing">Fork me on Github - React component</Header>

          <p>This is Pure inline style github fork ribbon on React component.
             The inline style css is from <a href="http://simonwhitaker.github.io/github-fork-ribbon-css/" target="_blank">
             "Fork me on GitHub"</a> CSS ribbon.</p>

          <Header className="huge dividing">Install</Header>

          <p>Use npm to install.</p>

          <Highlight className="bash">{"$ npm install react-github-fork-ribbon"}</Highlight>

          <Header className="huge dividing">Usage</Header>

          <Highlight language="js">
            {["var React = require('react'); ",
             "var GitHubForkRibbon = require('react-github-fork-ribbon'); ",
             "var ForkRibbon = React.createClass({ ",
             "",
             "  render: function () { ",
             "    return ( ",
             "      <GitHubForkRibbon position=\"right\" ",
             "        href=\"//github.com/jessy1092/react-github-fork-ribbon\" ",
             "        target=\"_blank\" > ",
             "        Fork me on GitHub ",
             "      </GitHubForkRibbon> ",
             "    ); ",
             "  } ",
             "}); ",
             "",
             "React.render( ",
             "  <ForkRibbon />, ",
             "  document.body ",
             ");"].join('\n')}
          </Highlight>

          <p>And then you will see GitHub Fork Ribbon.</p>

          <p>If you want to know more detail, you can see this website <a href="//github.com/jessy1092/react-semantify/tree/website" target="_blank">
             source code</a>.</p>

          <p>Have a nice Fork!</p>

        </div>

      </div>
    );
  }
})

React.render(<Index />, document.body);
